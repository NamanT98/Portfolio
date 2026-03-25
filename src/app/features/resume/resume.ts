import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  skills = [
    { category: 'Languages', items: 'Python, Java, JavaScript, TypeScript, SQL, R, HTML/CSS' },
    { category: 'Frontend', items: 'Angular, ReactJS, TypeScript, Material' },
    { category: 'Backend & APIs', items: 'Spring Boot, FastAPI, RESTful APIs, Microservices' },
    { category: 'Data & ML', items: 'Apache Spark, PySpark, Kafka, LangChain, AI Agents, Machine Learning, NLP' },
    { category: 'DevOps & Tools', items: 'Git, Docker, CI/CD, Linux, AWS' },
  ];
}
