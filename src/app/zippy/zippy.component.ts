import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input() title;
  isVisible : boolean = true;

  constructor() {

  }
  toggle() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {

  }
}

