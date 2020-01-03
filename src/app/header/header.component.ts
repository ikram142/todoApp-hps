import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit() {
  }

}
