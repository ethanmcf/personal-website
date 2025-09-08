import { Component } from '@angular/core';
import { SkillSectionComponent } from './skills-section/skills-section';
import { TitleComponent } from '../title/title';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill.model';

interface Section {
    title: string;
    description: string;
    skills: Skill[];
    icon: string; // SVG markup or icon name
}
const programmingSkills: Skill[] = [
    { name: "Java", experience: "1+ years of experience", proficiency: 86 },
    { name: "JavaScript", experience: "2+ years of experience", proficiency: 92 },
    { name: "Python", experience: "1+ years of experience", proficiency: 78 },
    { name: "TypeScript", experience: "1+ years of experience", proficiency: 85 },
    { name: "React", experience: "2+ years of experience", proficiency: 90 },
    { name: "Node.js", experience: "1+ years of experience", proficiency: 82 },
];

const databaseSkills: Skill[] = [
    { name: "MySQL", experience: "2+ years of experience", proficiency: 88 },
    { name: "PostgreSQL", experience: "1+ years of experience", proficiency: 75 },
    { name: "MongoDB", experience: "1+ years of experience", proficiency: 80 },
    { name: "Redis", experience: "6+ months of experience", proficiency: 65 },
];

const toolsSkills: Skill[] = [
    { name: "Git", experience: "2+ years of experience", proficiency: 95 },
    { name: "Docker", experience: "1+ years of experience", proficiency: 72 },
    { name: "VS Code", experience: "3+ years of experience", proficiency: 98 },
    { name: "AWS", experience: "6+ months of experience", proficiency: 68 },
    { name: "Figma", experience: "1+ years of experience", proficiency: 85 },
];


@Component({
  selector: 'app-skills',
  standalone: true,
    imports: [SkillSectionComponent, TitleComponent, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
    skillSections: Section[] = [
      {
        title: "Programming Languages",
        description: "Various programming languages I have experience with.",
        skills: programmingSkills,
        icon: "💻"
      },
      {
        title: "Databases",
        description: "Experienced with relational and non-relational databases for efficient data management.",
        skills: databaseSkills,
        icon: "🗄️"
      },
      {
        title: "Tools & Platforms",
        description: "Familiar with essential development tools and cloud platforms to enhance productivity.",
        skills: toolsSkills,
        icon: "🛠️"
      }
    ];
}
