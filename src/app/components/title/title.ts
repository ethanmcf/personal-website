import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  templateUrl: './title.html',
  styleUrls: ['./title.scss']
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
