import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'meine neue chat app...';
  public message: string;

  constructor() {
  }

  ngOnInit() {
  }

  public createNickname(name: string): void {
    Person.Nickname = name;

    this.message = `${name}`;
    

    var modal = document.getElementById('modal-wrapper');
    modal.style.display = "none";
  }

}
