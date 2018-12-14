import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-popup-nickname',
  templateUrl: './popup-nickname.component.html',
  styleUrls: ['./popup-nickname.component.css']
})
export class PopupNicknameComponent implements OnInit {

  constructor() { }
  public message: string;

  ngOnInit() {
  }

  public createNickname(name: string): void {
    
    var inputname = document.getElementById('input-nickname');
    Person.Nickname = inputname.value;

    var modal = document.getElementById('modal-wrapper');
    modal.style.display = "none";
  }

}
