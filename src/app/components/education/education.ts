import { Component } from '@angular/core';
import { TitleComponent } from '../title/title';
import { TimelineComponent } from '../timeline/timeline';
import { CommonModule } from '@angular/common';
import { TimelineData } from '../../models/timeline.model';

@Component({
  selector: 'app-education',
  standalone: true,
    imports: [TitleComponent, TimelineComponent, CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {
  education: TimelineData[] = [
    {
      title: 'Honours Bachelor of Science',
      company: 'University of Toronto',
      url: "https://mscac.utoronto.ca/news/u-t-ranked-among-worlds-top-10-universities-for-computer-science/#:~:text=Apply-,U%20of%20T%20ranked%20among%20world's%20top%2010%20universities%20for,the%20world%20for%20computer%20science.",
      period: 'Sept 2022 - May 2027 (Expected)',
      location: 'Computer Science Specialist',
      details: [
        '3.96/4.0 GPA',
        '3x Dean\'s List (2022-2025)',
        'Related Coursework: Algorithims and Data Structures, Operating Systems, Software Design, Databases, Machine Learning',
        'UofT is ranked 1st in Canada and 10th in the world for Computer Science',
      ]
    },
  ];
}
