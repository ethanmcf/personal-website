import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineData } from '../../models/timeline.model';

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class FooterComponent {
  @Input() data: TimelineData[] = [];
}
