import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoomType } from 'src/app/enums/RoomTypeEnum';
import { Room } from 'src/app/interfaces/Room';


@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent {
  @Output()
  onSubmit = new EventEmitter<Room>();
  @Input()
  btnText: string = '';
  formRoom!: FormGroup;

  roomsType: RoomType[] = [RoomType.COUPLE, RoomType.SINGLE];

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
    this.formRoom = new FormGroup({
      number: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      bedQuantity: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      dailyRate: new FormControl('', [
        Validators.required,
        Validators.min(0.01),
      ]),
    });
  }

  get number() {
    return this.formRoom.get('number')!;
  }
  get type() {
    return this.formRoom.get('type')!;
  }
  get bedQuantity() {
    return this.formRoom.get('bedQuantity')!;
  }
  get description() {
    return this.formRoom.get('description')!;
  }
  get dailyRate() {
    return this.formRoom.get('dailyRate')!;
  }

  submit() {
    if (this.formRoom.invalid) return;

    this.onSubmit.emit(this.formRoom.value);
  }
  cancel() {
    this.router.navigate(['quartos']);
  }

}
