import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input() title;
  @Input() isOpen : boolean = true;
  @Output() opened = new EventEmitter();
  @Output() closed =  new EventEmitter();

  constructor() {

  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.opened.emit() : this.closed.emit();

  }

  ngOnInit() {

  }
}

