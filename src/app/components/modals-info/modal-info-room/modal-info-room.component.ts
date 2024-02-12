import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/app/interfaces/Room';

@Component({
  selector: 'app-modal-info-room',
  templateUrl: './modal-info-room.component.html',
  styleUrls: ['./modal-info-room.component.scss'],
})
export class ModalInfoRoomComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Room) {}
}
