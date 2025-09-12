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
const frontEnd: Skill[] = [
    { name: "React", experience: "4+ years of experience", proficiency: 92 },
    { name: "NextJS", experience: "2+ years of experience", proficiency: 80 },
    { name: "JavaScript", experience: "4+ years of experience", proficiency: 85 },
    { name: "TypeScript", experience: "2+ years of experience", proficiency: 75 },
    { name: "HTML/CSS", experience: "5+ years of experience", proficiency: 90 },
    { name: "Node.js", experience: "1+ years of experience", proficiency: 70 },
];

const backEnd: Skill[] = [
    { name: "Python", experience: "5+ years of experience", proficiency: 93 },
    { name: "Java", experience: "1.5+ years of experience", proficiency: 85 },
    { name: "SQL", experience: "1+ years of experience", proficiency: 80 },
    { name: "C", experience: "6+ months of experience", proficiency: 70 },
    { name: "Haskel", experience: "3+ months of experience", proficiency: 50 },

];

const testtingAndDeployment: Skill[] = [
    { name: "Kubernetes", experience: "7+ months of experience", proficiency: 90 },
    { name: "GCP", experience: "6+ months of experience", proficiency: 80 },
    { name: "Jenkins", experience: "3+ years of experience", proficiency: 92 },
    { name: "CI/CD Pipelines", experience: "6+ monthss of experience", proficiency: 85 },
    { name: "AWS:EC2", experience: "2+ months of experience", proficiency: 60 },
    { name: "Jest", experience: "6+ months of experience", proficiency: 70 },
    { name: "JUnit", experience: "5+ months of experience", proficiency: 70 },

];

const devTools: Skill[] = [
    { name: "Git", experience: "6+ years of experience", proficiency: 95 },
    { name: "Docker", experience: "1+ years of experience", proficiency: 80 },
    { name: "Figma", experience: "3+ years of experience", proficiency: 93 },
    { name: "TDD", experience: "3+ years of experience", proficiency: 80 },
    { name: "Agile", experience: "3+ years of experience", proficiency: 95 },
    { name: "OOP", experience: "3+ years of experience", proficiency: 85 },
    { name: "Design Principles", experience: "1+ years of experience", proficiency: 85 },



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
        title: "Front-End Development",
        description: "Creating responsive, interactive user interfaces.",
        skills: frontEnd,
        icon: "💻"
      },
      {
        title: "Back-End Development",
        description: "Building secure, scalable server systems.",
        skills: backEnd,
        icon: "🗄️"
      },
      {
        title: "Testing & Deployment",
        description: "Ensuring quality and smooth releases.",
        skills: testtingAndDeployment,
        icon: "🚀"
      },
      {
        title: "Development Tools and Methodologies",
        description: "Tools and practices for efficient development.",
        skills: devTools,
        icon: "🛠️"
      },
    ];
}
