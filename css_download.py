import re
import requests
import os

def download_file(url, dest_folder):
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
    filename = url.split('/')[-1]
    path = os.path.join(dest_folder, filename)
    if not os.path.exists(path):
        print(f"Downloading {url} to {path}")
        r = requests.get(url, stream=True)
        with open(path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return filename

def process_css(css_path, fonts_base_dir):
    with open(css_path, 'r') as f:
        content = f.read()

    urls = re.findall(r'url\((https?://[^)]+)\)', content)
    for url in urls:
        # Determine folder based on URL or font family in content
        # For simplicity, we can just use the url to decide or a mapping
        if 'inter' in url.lower():
            folder = os.path.join(fonts_base_dir, 'inter')
            local_path_prefix = './inter/'
        elif 'spacegrotesk' in url.lower():
            folder = os.path.join(fonts_base_dir, 'space-grotesk')
            local_path_prefix = './space-grotesk/'
        elif 'materialicons' in url.lower():
            folder = os.path.join(fonts_base_dir, 'material-icons')
            local_path_prefix = './' # For material-icons.css which is inside the folder
        else:
            folder = os.path.join(fonts_base_dir, 'misc')
            local_path_prefix = './misc/'

        local_filename = download_file(url, folder)
        content = content.replace(url, local_path_prefix + local_filename)

    with open(css_path, 'w') as f:
        f.write(content)

base_dir = '/home/twiix/dev/johnfieweger.de/src/assets/fonts'
process_css(os.path.join(base_dir, 'fonts.css'), base_dir)
process_css(os.path.join(base_dir, 'material-icons/material-icons.css'), os.path.join(base_dir, 'material-icons'))
