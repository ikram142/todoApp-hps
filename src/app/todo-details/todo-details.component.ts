import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.styl']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo :Todo;
  constructor() { }

  ngOnInit() {
  }

}
