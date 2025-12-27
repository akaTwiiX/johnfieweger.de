import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  public buttons = ['All', 'JavaScript', 'Angular', 'Django', 'Firebase', 'React'];
  public portfolio = [
    {
      'name': 'KanbanBoard',
      'img': 'KanbanBoard.png',
      'description': 'Simple Kanban-Board for my Tasks',
      'engine': ['Angular', 'Firebase'],
      'address': 'https://kanban.johnfieweger.de/',
      'github': 'https://github.com/akatwiix/KanbanBoard'
    },
    {
      'name': 'El Pollo Loco',
      'img': 'elpolloloco.png',
      'description': 'Based jump and run game (OOP)',
      'engine': ['JavaScript'],
      'address': 'https://elpollo.johnfieweger.de/',
      'github': 'https://github.com/akatwiix/El-Pollo-Loco'
    },
    {
      'name': 'Taxi4Berlin.de',
      'img': 'website-serkan.png',
      'description': 'A website for Serkan Demir',
      'engine': ['JavaScript'],
      'address': 'https://taxi4berlin.de/',
      'github': 'https://github.com/akatwiix/Taxi4Berlin.de'
    },
    {
      'name': 'Worktimer',
      'img': 'worktimer-example.png',
      'description': 'A simple worktime tracking app',
      'engine': ['Angular', 'Firebase'],
      'address': 'https://akatwiix.github.io/Worktimer/',
      'github': 'https://github.com/akatwiix/Worktimer'
    },
    {
      'name': 'Docusaurus',
      'img': 'docusaurus.png',
      'description': 'A documentation website for my projects',
      'engine': ['React'],
      'address': 'https://docs.johnfieweger.de/',
      'github': 'https://github.com/akatwiix/docusaurus'
    },
    {
      'name': 'PflanzenABC',
      'img': 'pflanzenabc.webp',
      'description': 'A simple plant encyclopedia (Hybrid App - Ionic)',
      'engine': ['Angular', 'Firebase'],
      'address': 'https://akatwiix.github.io/PflanzenABC/',
      'github': 'https://github.com/akatwiix/PflanzenABC'
    },
    {
      'name': 'Videoflix',
      'img': 'videoflix.png',
      'description': 'My Netflix Clone',
      'engine': ['Angular', 'Django'],
      'address': 'https://videoflix.johnfieweger.de/',
      'github': 'https://github.com/akatwiix/Videoflix'
    },
    {
      'name': 'Website',
      'img': 'meine-webseite.png',
      'description': 'My Homepage',
      'engine': ['Angular'],
      'address': 'https://johnfieweger.de/',
      'github': 'https://github.com/akatwiix/johnfieweger.de'
    },
    {
      'name': 'Ring of Fire',
      'img': 'cards.jpg',
      'description': 'A little card drinking game',
      'engine': ['Angular', 'Firebase'],
      'address': 'https://ring.johnfieweger.de/',
      'github': 'https://github.com/akatwiix/Ring-Of-Fire'
    },
  ];

  public engineIcons: { [key: string]: string } = {
    'Angular': 'assets/img/skills/angular.png',
    'JavaScript': 'assets/img/skills/javascript.png',
    'TypeScript': 'assets/img/skills/typescript.png',
    'Django': 'assets/img/skills/django.png',
    'React': 'assets/img/skills/react-reactnative.png',
    'Firebase': 'assets/img/skills/firebase.png'
  };

  getEngineIcon(engine: string): string {
    return this.engineIcons[engine] || '';
  }

  filterInActive = true;

  public currentName: string = 'All';

  active(id: any) {
    this.currentName = id;
    this.filterInActive = this.currentName === 'All';
    console.log(this.currentName);
  }

  get filteredPortfolio() {
    if (this.currentName === 'All') {
      return this.portfolio;
    }
    return this.portfolio.filter(p => p.engine.includes(this.currentName));
  }

}
