import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ChatMessage } from 'src/app/shared/Models/chat-message';
import { Person } from 'src/app/shared/Models/person';
@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  //public history: string;
  public history: ChatMessage[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 2000);
  }

  
  public getNickname() : string {
    return Person.Nickname;
  }
  
  private getHistory(): void {

    this.chatService.getHistory()

    .subscribe(response => {
      this.history = [];
      for(var h of response){
        this.history.push(new ChatMessage(h.nickname, h.message, new Date(h.date)));
      }
    });
  }
}
