import { Component } from '@angular/core';
import { TitleComponent } from '../title/title';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  imports: [TitleComponent]
})
export class Contact {}
