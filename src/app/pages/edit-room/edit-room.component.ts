import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { Room } from 'src/app/interfaces/Room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss'],
})
export class EditRoomComponent {
  room!: Room;

  roomId?: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomsService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.roomService
      .findOne(this.roomId!)
      .subscribe((room) => (this.room = room));
  }

  async submitHandler(room: Room) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        icon: 'update',
        title: 'Você está atualizando um cadastro...',
        content: 'Certifique-se de que as informação inseridas estão corretas',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) return;

      this.roomService.update(room, this.roomId!).subscribe(
        (data) => {
          this.toastr.success('Quarto atualizado com sucesso!');
          this.router.navigate(['quartos']);
        },
        (error) => {
          console.log(error);
          this.toastr.error(`Erro na atualiazação do cadastro! ${error.error.message}`);
        }
      );
    });
  }
}
