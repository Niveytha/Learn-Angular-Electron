import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  constructor() { }   // runs when object(component) is initialized

  ngOnInit(): void {  // life-cycle method - run when component loads
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
