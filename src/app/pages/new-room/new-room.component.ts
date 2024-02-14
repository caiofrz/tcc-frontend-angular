import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { Room } from 'src/app/interfaces/Room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss'],
})
export class NewRoomComponent {
  constructor(
    private roomService: RoomsService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  async submitHandler(room: Room) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        icon: 'check_circle',
        title: 'Você está cadastrando um novo quarto...',
        content: 'Certifique-se de que as informação inseridas estão corretas',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) return;

      this.roomService.save(room).subscribe(
        (data) => {
          this.toastr.success('Quarto cadastrado com sucesso!');
          this.router.navigate(['quartos']);
        },
        (error) => {
          console.log(error);
          this.toastr.error(`Erro no cadastro do quarto! ${error.error.message}`);
        }
      );
    });
  }
}
