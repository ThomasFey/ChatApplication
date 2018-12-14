import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNicknameComponent } from './popup-nickname.component';

describe('PopupNicknameComponent', () => {
  let component: PopupNicknameComponent;
  let fixture: ComponentFixture<PopupNicknameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNicknameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
