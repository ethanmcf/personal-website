import { Component } from '@angular/core';
import { TitleComponent } from '../title/title';
import { TimelineComponent } from '../timeline/timeline';
import { CommonModule } from '@angular/common';
import { TimelineData } from '../../models/timeline.model';

@Component({
  selector: 'app-experience',
  standalone: true,
    imports: [TitleComponent, TimelineComponent, CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences: TimelineData[] = [
    {
      title: 'DevOps Specalist Intern',
      company: 'Tangerine',
      url: 'https://www.tangerine.ca',
      period: 'Summer 2025',
      location: 'Toronto, CA',
      details: [
        'Automated code deployments by building CI/CD pipelines in Jenkins and Bash, reducing manual integration branch deployments by 30% and improving deployment consistency',
        'Scaled and managed 20+ Kubernetes microservices across 5 development environments, ensuring stable deployments and handling increased traffic'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Socitabank',
      url: 'https://www.scotiabank.com/ca/en/personal.html',
      period: 'Summer 2024',
      location: 'Toronto, CA',
      details: [
        'Designed and implemented a custom ServiceNow form to streamline ticket processing by auto-filling employee information, reducing manual input by 40% and improving data consistency for the internal development team',
        'Developed full-stack applications, utilizing JavaScript for front-end development and integrating REST APIs with automated workflows on the ServiceNow platform'
      ]
    },
    {
      title: 'Quality Engineer Intern',
      company: 'Tangerine',
      url: 'https://www.tangerine.ca',
      period: 'Summer 2023',
      location: 'Toronto, CA',
      details: [
        "Restructured Tangerine's Selenium WebDriver implementation, enhancing the speed of mobile web testing execution by over 25%, with a focus on supporting offshore teams and remote employees",
        'Developed Java and TypeScript scripts to help developers expand front-end and api test coverage by 10%'
      ]
    },
    {
      title: 'Web Designer',
      company: 'TileCo Inc',
      url: 'https://tilecoinc.ca/',
      period: '2021–2022',
      location: 'Toronto, CA',
      details: [
        'Engaged in the development of the design, encompassing responsibilities including the management of image updates and the introduction of new products'
      ]
    }
  ];
}
