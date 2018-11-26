import { Component } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Chat App';
  public historyMessage: string;

  constructor() {
    this.historyMessage = '';
  }

  public onChatHistory(value: string): void {
    if (!this.historyMessage) {
      this.historyMessage = '';
    }

    const dateTime: Date = new Date();
    value = value.replace("\n", '<br />');

    // this.historyMessage += value;
    this.historyMessage += `${dateTime.toLocaleString()} ${Person.Nickname}:<br>${value}<br>`;
  }
}
