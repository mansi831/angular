import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivesignup',
  templateUrl: './reactivesignup.component.html',
  styleUrls: ['./reactivesignup.component.css']
})
export class ReactivesignupComponent implements OnInit {

  signupForm : FormGroup;  

  constructor() { }

  ngOnInit(): void {
   this.signForm();
  }

  onSubmit(){
    console.log(this.signupForm);
  }


  private signForm(){
      this.signupForm = new FormGroup({
      'pName': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'pId': new FormControl(null, Validators.required),
      'price': new FormControl('0')
    });
  }
}
