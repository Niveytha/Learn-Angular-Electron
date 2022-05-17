import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService is public as we're going to bind to it in the template
  // as Angular only binds to public component properties.
  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
