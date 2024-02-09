import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoRoomComponent } from './modal-info-room.component';

describe('ModalInfoRoomComponent', () => {
  let component: ModalInfoRoomComponent;
  let fixture: ComponentFixture<ModalInfoRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalInfoRoomComponent]
    });
    fixture = TestBed.createComponent(ModalInfoRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
