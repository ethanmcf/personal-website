import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../title/title';

interface Project {
  title: string;
  year: string;
  skills: string[];
  description: string;
  image?: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Connect–4 AI',
      year: '2023',
      skills: ['Python', 'PyGame', 'Github', 'Docker'],      description: 'Web application that tracks the wait time of clinics in real-time. Users are shown the quickest total trip, factoring in driving time and wait time.',
      image: '', // you can drop in an asset path here
      link: '#'
    },
    {
      title: 'Connect–4 AI',
      year: '2023',
      skills: ['Python', 'PyGame', 'Github'],
      description: 'Web application that tracks the wait time of clinics in real-time. Users are shown the quickest total trip, factoring in driving time and wait time.',
      image: '',
      link: '#'
    },
    {
      title: 'Connect–4 AI',
      year: '2023',
      skills: ['Python', 'PyGame', 'Github'],
      description: 'Web application that tracks the wait time of clinics in real-time. Users are shown the quickest total trip, factoring in driving time and wait time.',
      image: '',
      link: '#'
    },
  ];
}
