import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-projects',
  imports: [CommonModule],
  templateUrl: './all-projects.html',
  styleUrl: './all-projects.scss',
})
export class AllProjects {
  currentFilter = 'All';
  filters = ['All', 'AI', 'Data Visualization', 'Development'];

  portfolioItems = [
    { title: 'Fine Tuned TinyBert using Knowledge Distillation for Twitter Sentiment Analysis', category: 'AI', image: 'assets/img/portfolio/tinybert.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/TinyBert-Knowledge-Distillation'}], description: 'Implemented <strong>Knowledge Distillation</strong> on <strong>TinyBERT</strong> to optimize transformer inference speed while maintaining high accuracy for real-time Twitter sentiment analysis.' },
    { title: 'Fine Tune Pegasus Model for News Summarization', category: 'AI', image: 'assets/img/portfolio/news.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/text-summarizer'}], description: 'Fine-tuned Google\'s <strong>PEGASUS</strong> transformer model on news datasets to generate concise, high-quality, <strong>abstractive summaries</strong>.' },
    { title: 'Predicting aqueous solubility of chemicals using GNN', category: 'AI', image: 'assets/img/portfolio/chemicals.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/gnn-classification/blob/main/Solubility_of_Chemicals.ipynb'}], description: 'Built a <strong>Graph Neural Network (GNN)</strong> to predict the aqueous solubility of chemical compounds based on their <strong>molecular structures</strong>.' },
    { title: 'Kaggle Black Friday Feature Engineering', category: 'Data Visualization', image: 'assets/img/portfolio/blackfriday.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Kaggle-Black-Friday-Feature-Engineering'}], description: 'Performed rigorous <strong>exploratory data analysis</strong> and advanced <strong>feature engineering</strong> to predict consumer purchase behavior.' },
    { title: 'FRIENDS Characters Face Recognition using YOLO', category: 'AI', image: 'assets/img/portfolio/friends.JPG', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Friends-Face-Recognition'}], description: 'Trained a custom <strong>YOLO object detection</strong> model to accurately detect and recognize the faces of main characters from the TV show FRIENDS.' },
    { title: 'Twitter disaster tweets prediction using RNNs', category: 'AI', image: 'assets/img/portfolio/twitter.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Twitter-Disaster-analysis'}], description: 'Developed a <strong>Recurrent Neural Network (RNN)</strong> using <strong>LSTM/GRU</strong> layers to classify tweets and identify real emergency disaster scenarios.' },
    { title: 'End to End Food 101 Image Classificier Flask App', category: 'Development', image: 'assets/img/portfolio/food.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Food101/tree/master'}], description: 'Built an end-to-end web application using <strong>Flask</strong>, deploying a Deep Learning vision model to classify images of food into <strong>101 categories</strong>.' },
    { title: 'Digit Classifier webapp with feedback loop', category: 'Development', image: 'assets/img/portfolio/digit.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Digit-Classifier-webapp-with-Feedback-loop/tree/main'}], description: 'Created an interactive web application that classifies hand-drawn digits using <strong>CNNs</strong>, featuring a user <strong>feedback loop</strong> to continually improve model accuracy.' },
    { title: 'Voice Classification using CNN', category: 'AI', image: 'assets/img/portfolio/app_speech_0.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Voice-Identification/tree/main'}], description: 'Converted audio waveforms into <strong>spectrograms</strong> to train a <strong>Convolutional Neural Network (CNN)</strong> for robust voice and speech classification.' },
    { title: 'Fine tuned YAMNet Model for Bird voice classification', category: 'AI', image: 'assets/img/portfolio/bird.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Bird-Voice-Classification-using-YAMNet'}], description: 'Fine-tuned the <strong>YAMNet</strong> audio event classifier, transferring its knowledge to accurately identify various <strong>bird species</strong> from complex audio recordings.' },
    { title: 'Review Temporal Dietary Pattern assosiated with obesity in US adults', category: 'Data Visualization', image: 'assets/img/portfolio/obese.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Review-Temporal-Dietary-Pattern-assosiated-with-obesity-in-US-adults'}], description: 'Conducted a comprehensive <strong>statistical analysis</strong> on dietary temporal patterns to find actionable insights associated with <strong>obesity trends</strong> in US adults.' },
    { title: 'Campus Food Delivery System | 3LEGANT', category: 'Development', image: 'assets/img/portfolio/elegant.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Campus-Food-Delivery'}], description: 'Designed and developed a comprehensive campus <strong>food delivery platform</strong>, streamlining order management and delivery logistics for students.' },
    { title: 'Advanced House Price Dataset Feature Engineering', category: 'Data Visualization', image: 'assets/img/portfolio/houses.png', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Advanced-House-Price-Dataset-Feature-Engineering'}], description: 'Applied advanced <strong>feature engineering</strong>, <strong>imputation</strong>, and encoding techniques on the Ames Housing dataset to build robust regression models.' },
    { title: 'Live Sketch using OpenCV', category: 'AI', image: 'assets/img/portfolio/sketch.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/Live-Sketch-Using-openCV'}], description: 'Utilized <strong>OpenCV</strong> computer vision techniques to process webcam feeds in real-time, converting live video into pencil <strong>sketch-like outlines</strong>.' },
    { title: 'Smoke Detector for surveillance using YOLO', category: 'AI', image: 'assets/img/portfolio/smoke detector.jpg', links: [{ icon: 'github', url: 'https://github.com/NamanT98/SmokeDetector'}], description: 'Implemented a custom-trained <strong>YOLO object detection</strong> model for real-time smoke detection from surveillance footage to enhance <strong>early fire warning systems</strong>.' }
  ];

  filteredItems = this.portfolioItems;

  constructor(private router: Router) {}

  setFilter(filter: string) {
    this.currentFilter = filter;
    if (filter === 'All') {
      this.filteredItems = this.portfolioItems;
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === filter);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
