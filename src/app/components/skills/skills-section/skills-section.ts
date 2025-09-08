import { Component, Input } from '@angular/core';
import { SkillCardComponent } from '../skills-card/skills-card';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../models/skill.model';


@Component({
  selector: 'app-skill-section',
  standalone: true, 
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './skills-section.html',
  styleUrls: ['./skills-section.scss']
})
export class SkillSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() skills: Skill[] = [];
  @Input() icon!: string;

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
