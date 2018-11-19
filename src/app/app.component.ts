import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'meine neue chat app...';
  public historyMessage: string;
  public name: string;

  constructor() {
    this.historyMessage = '';
  }

  public onChatHistory(value: string, name: string): void {
    if (!this.historyMessage) {
      this.historyMessage = '';
    }

    const dateTime: Date = new Date();

    // this.historyMessage += value;
    this.historyMessage += `${dateTime.toLocaleString()}<br>${name}: ${value}<br>`;
  }

  public onSetNickname(name: string): void {
    if (!this.name) {
      this.name = '';
    }

    this.name = name;
  }
}
