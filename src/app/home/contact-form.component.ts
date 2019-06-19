import { Component, OnInit } from '@angular/core';
// import { ErrorStateMatcher } from '@angular/material/core';
// import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// // This is to check our input
// class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched ));
//   }
// }
// // || control.isSubmitted


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class AppContactForm implements OnInit {
  // matcher = new MyErrorStateMatcher();
  email: string;
  name: string;
  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // let parm = this.route.snapshot.params['parm']
    console.log("ngOnInit")
  }

  submitMessage() {
    const messageForm = `My name is ${this.name}.\nMy email is ${this.email}.\nHere is my message: ${this.message}`;
    alert(messageForm);
  }
}

