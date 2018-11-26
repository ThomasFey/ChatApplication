import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  public message: string;

  constructor() { }

  ngOnInit() {
  }

  public createNickname(name: string): void {
    Person.Nickname = name;

    this.message = `Hallo ${name}. Willkommen auf unserer Chat App`;
  }
}
