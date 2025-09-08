import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineData } from '../../models/timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})

export class TimelineComponent {
  @Input() data: TimelineData[] = [];
}
