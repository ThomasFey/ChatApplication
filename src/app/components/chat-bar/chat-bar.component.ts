import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ChatMessage } from 'src/app/shared/Models/chat-message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {

  public chatMessage: string;

  constructor(private chatService: ChatService) {
  }

  public addMessage(value: string): void {
    if (Person.Nickname) {
      const messageToSend: ChatMessage = new ChatMessage();
      messageToSend.message = value;
      messageToSend.nickname = Person.Nickname;

      this.chatService.addToHistory(messageToSend)
        .subscribe(response => {
          this.chatMessage = '';
        },
          (error: any) => {
            console.log(error);
          });
    } else {
      alert('Nickname fehlt');
    }
  }
}
