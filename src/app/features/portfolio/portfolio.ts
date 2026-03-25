import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [MatIconModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  portfolioItems = [
    { title: 'Fine Tuned TinyBert using Knowledge Distillation for Twitter Sentiment Analysis', category: 'AI', image: 'assets/img/portfolio/tinybert.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/TinyBert-Knowledge-Distillation'}], description: 'Implemented <strong>Knowledge Distillation</strong> on <strong>TinyBERT</strong> to optimize transformer inference speed while maintaining high accuracy for real-time Twitter sentiment analysis.' },
    { title: 'Fine Tune Pegasus Model for News Summarization', category: 'AI', image: 'assets/img/portfolio/news.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/text-summarizer'}], description: 'Fine-tuned Google\'s <strong>PEGASUS</strong> transformer model on news datasets to generate concise, high-quality, <strong>abstractive summaries</strong>.' },
    { title: 'Predicting aqueous solubility of chemicals using GNN', category: 'AI', image: 'assets/img/portfolio/chemicals.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/gnn-classification/blob/main/Solubility_of_Chemicals.ipynb'}], description: 'Built a <strong>Graph Neural Network (GNN)</strong> to predict the aqueous solubility of chemical compounds based on their <strong>molecular structures</strong>.' },
  ];

  displayedItems = this.portfolioItems;

  constructor(private router: Router) {}

  viewAll() {
    this.router.navigate(['/projects']);
  }
}
