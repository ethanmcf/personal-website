import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-card.html',
  styleUrls: ['./skills-card.scss']
})
export class SkillCardComponent implements AfterViewInit {
  @Input() name!: string;
  @Input() experience!: string;
  @Input() proficiency!: number;

  strokeDasharray = 2 * Math.PI * 20; // circumference of r=20
  strokeDashoffset = 0;

  ngAfterViewInit() {
    // Start at 100% offset (empty circle)
    this.strokeDashoffset = this.strokeDasharray;

    // Trigger animation on next tick
    setTimeout(() => {
      this.strokeDashoffset =
        this.strokeDasharray - (this.proficiency / 100) * this.strokeDasharray;
    }, 50);
  }
}
