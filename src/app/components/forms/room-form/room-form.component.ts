import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
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

  @Input()
  roomData?: Room;

  roomsType: RoomType[] = [RoomType.COUPLE, RoomType.SINGLE];

  constructor(public dialog: MatDialog, private router: Router) {
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
      dailyRate: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['roomData'] && changes['roomData'].currentValue) {
      this.updateForm();
    }
  }

  private updateForm(): void {
    this.formRoom = new FormGroup({
      number: new FormControl(this.roomData?.number, [Validators.required]),
      type: new FormControl(
        this.roomData!.type == RoomType.SINGLE ? this.roomsType[0] : this.roomsType[1],
        [Validators.required]
      ),
      bedQuantity: new FormControl(this.roomData!.bedQuantity, [
        Validators.required,
        Validators.min(1),
      ]),
      description: new FormControl(this.roomData!.description, [
        Validators.required,
        Validators.maxLength(150),
      ]),
      dailyRate: new FormControl(this.roomData!.dailyRate, [
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
    this.formRoom.reset();
    this.router.navigate(['quartos']);
  }
}
