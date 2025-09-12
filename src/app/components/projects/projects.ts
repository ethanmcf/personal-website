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
      title: 'Notion Network Sync',
      year: '2025',
      skills: ['Python', 'Docker', 'Kubernetes'],
      description: "Developed Dockerized Python services orchestrated with Kubernetes to extract LinkedIn chats and meeting notes, integrate them into a Notion database, and generate concise, structured summaries using the GPT API for streamlined tracking and follow-up.",
      image: '', // you can drop in an asset path here
      link: 'https://github.com/ethanmcf/Notion-Network-Sync'
    },
    {
      title: 'Google Maps Detector',
      year: '2025',
      skills: ['Python', 'GCP', 'SQL', 'Playwright'],
      description: 'Built an automated system that uses computer vision to detect updates on Google Maps locations and sends real-time email notifications to a recipient list for efficient monitoring.',
      image: '',
      link: 'https://github.com/ethanmcf/GMaps-Change-Detector'
    },
    {
      title: 'Clinic Wait Time Tracker',
      year: '2023',
      skills: ['React', 'Firebase', 'Google Maps API'],
      description: 'Web application that tracks the wait time of clinics in real-time. Users are shown the quickest total trip, factoring in driving time and wait time.',
      image: '',
      link: 'https://github.com/ULA-Development/ClinicWaitTime_Website'
    },

    {
      title: 'UofT Booking Bot',
      year: '2025',
      skills: ['Python', 'Selenium', 'Git'],
      description: 'Web scraping application that automates the process of booking golf slots at the University of Toronto.',
      image: '',
      link: 'https://github.com/ethanmcf/UofTBookingBot'
    },
    {
      title: 'LoveYouDaily',
      year: '2023',
      skills: ['ReactNative', 'JavaScript', 'Jest'],
      description: 'Created a mobile app as an anniversary gift for couples, allowing users to share up to 30 photos, voice notes, and messages, with each piece of content disappearing after being viewed.',
      image: '',
      link: 'https://github.com/ethanmcf/LoveYouDaily'
    },
    {
      title: 'Connect–4 AI',
      year: '2023',
      skills: ['Python', 'PyGame', 'Graph & Heuristic Algorithms'],
      description: 'Developed a Connect 4 AI with an intelligent move-selection algorithm and an interactive Pygame front end, allowing users to play against the computer with real-time visual feedback.',
      link: 'https://github.com/Flying-turkeys/FeelinConnected'
    },
  ];
}
