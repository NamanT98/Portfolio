import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      fetch("https://formsubmit.co/ajax/namantrisholiya17967@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message
          })
      })
      .then(response => response.json())
      .then(data => {
          this.snackBar.open('Thank you for your message! It has been successfully sent.', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          
          this.contactForm.reset();
          if (this.formDirective) {
            this.formDirective.resetForm();
          }
          
          window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
          console.error(error);
          this.snackBar.open('There was an error sending your message. Please try again later.', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
      });
    }
  }
}
