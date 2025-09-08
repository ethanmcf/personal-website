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
      title: 'Quality Engineer Intern',
      company: 'Tangerine',
      url: 'https://www.tangerine.ca',
      period: 'Summer 2023',
      location: 'Toronto, CA',
      details: [
        'Contributed to a regression team, ensuring software consistency post-updates for mobile and web applications, emphasizing quality and stability',
        'Collaborated closely with developers and QA to refine testing processes'
      ]
    },
    {
      title: 'Web Designer',
      company: 'TileCo Inc',
      url: '#',
      period: '2021–2022',
      location: 'Toronto, CA',
      details: [
        'Engaged in the development of the design, encompassing responsibilities including the management of image updates and the introduction of new products'
      ]
    },
    {
      title: 'Web Designer',
      company: 'TileCo Inc',
      url: '#',
      period: '2021–2022',
      location: 'Toronto, CA',
      details: [
        'Engaged in the development of the design, encompassing responsibilities including the management of image updates and the introduction of new products'
      ]
    }
  ];
}
