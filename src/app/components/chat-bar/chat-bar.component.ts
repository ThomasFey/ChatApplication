import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() chatHistory: EventEmitter<string> = new EventEmitter();

  public chatMessage: string;

  constructor() {
  }

  ngOnInit() {
  }

  public addMessage(value: string): void {
    // alert(value);
    this.chatHistory.emit(value);

    this.chatMessage = '';
  }
}
