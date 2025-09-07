import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, About, Experience, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('personal-website');
}