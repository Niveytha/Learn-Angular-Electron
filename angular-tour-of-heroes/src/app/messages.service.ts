import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages : string[] = [];
  
  add(message: string) { // add message to cache
    this.messages.push(message);
  }

  clear() { // clear cache
    this.messages = [];
  }

  constructor() { }
}