import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  public chatMessage: string;
  constructor() { }

  ngOnInit() {
  }

  public addMessage(): void {
    alert(this.chatMessage);
  }
}
