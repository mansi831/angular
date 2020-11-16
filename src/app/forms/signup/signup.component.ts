import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    console.log("Product Name is : " + form.value.pName);
    console.log("Product Id is : " + form.value.pId);
    console.log("Price is : " + form.value.price);    
    }
  
}
