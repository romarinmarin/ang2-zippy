import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isVisible : boolean = true;

  constructor() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
  }

}

