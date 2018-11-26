import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {

  @Output() chatHistory: EventEmitter<string> = new EventEmitter();

  public chatMessage: string;

  constructor() {
  }

  public addMessage(value: string): void {
    if (Person.Nickname) {
      this.chatHistory.emit(value);
      this.chatMessage = '';
    } else {
      alert('Nickname fehlt');
    }
  }
}
