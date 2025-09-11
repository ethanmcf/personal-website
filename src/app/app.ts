import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { Skills } from './components/skills/skills';
import { FooterComponent } from './components/footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, EducationComponent, RouterOutlet, Header, About, ExperienceComponent, ProjectComponent, Skills, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('personal-website');
}

