import { Component, Input, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-rotator',
  standalone: true,
  templateUrl: './text-rotator.html',
  styleUrls: ['./text-rotator.scss'],
  imports: [CommonModule],
})
export class TextRotatorComponent implements OnInit, OnDestroy {
  /** Array of texts to rotate */
  @Input() texts: string[] = ['Software Engineer', 'Student Athlete'];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    const holdTime = 3000; // 3 seconds per text
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, holdTime);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
