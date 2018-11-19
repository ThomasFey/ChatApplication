import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  @Output() nickname: EventEmitter<string> = new EventEmitter();

  public name: string;
  constructor() { }

  ngOnInit() {
  }

  public setNickname(name: string): void{
    this.name = name;
    this.nickname.emit(name);
  }

}
