import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillGroups = [
    {
      category: 'Languages',
      icon: 'fa-code',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'HTML', 'CSS']
    },
    {
      category: 'Frontend',
      icon: 'fa-layer-group',
      skills: ['Angular', 'ReactJS', 'Angular Material', 'RxJS', 'SCSS', 'Responsive Design']
    },
    {
      category: 'Backend & APIs',
      icon: 'fa-server',
      skills: ['Spring Boot', 'FastAPI', 'RESTful APIs', 'Microservices', 'OOP', 'Design Patterns']
    },
    {
      category: 'Messaging & Streaming',
      icon: 'fa-bolt',
      skills: ['Apache Kafka', 'Apache Pulsar', 'Distributed Systems', 'Event-Driven Architecture']
    },
    {
      category: 'Databases',
      icon: 'fa-database',
      skills: ['PostgreSQL', 'MongoDB', 'Oracle', 'MySQL', 'MS SQL', 'Redis']
    },
    {
      category: 'AI & Data',
      icon: 'fa-brain',
      skills: ['LangChain', 'AI Agents', 'Apache Spark', 'PySpark', 'MLflow', 'Machine Learning', 'NLP', 'Deep Learning']
    },
    {
      category: 'DevOps & Tools',
      icon: 'fa-gears',
      skills: ['Git', 'Docker', 'CI/CD Pipelines', 'Linux', 'SonarQube', 'Agile/Scrum', 'JUnit']
    }
  ];
}
