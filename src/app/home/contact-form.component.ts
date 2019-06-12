import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
// This is to check our input
export class ContactFormComponent implements OnInit, ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form  && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || control.isSubmitted));
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    //Fill out some submission email link
  }
}
