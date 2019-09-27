import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infy-survey';
  parentForm;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.config);

    this.parentForm = new  FormGroup({
      email: new FormControl()
    });
  }

  onChange() {
    console.log(this.parentForm);
  }
}
