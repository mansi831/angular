import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pid=0;
  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.pid=data.id;
    })
  }

}
