import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuItem } from 'primeng/api';
import { Observable, catchError, of } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Room } from 'src/app/interfaces/Room';
import { RoomsService } from 'src/app/services/rooms.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements AfterViewInit {
  rooms$!: Observable<Room[]>;
  datasource = new MatTableDataSource<Room[]>();
  displayedColumns = ['number', 'type', 'bedQuantity', 'dailyRate', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  navItens: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  constructor(
    private service: RoomsService,
    public dialog: MatDialog,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.set('@ChildOne', 'Child One');

    this.rooms$ = this.service.findAll().pipe(
      catchError((error) => {
        this.openDialogError('Erro ao carregar a lista de quartos!');
        return of([]);
      })
    );
  }

  openDialogError(error: string) {
    this.dialog.open(DialogComponent, {
      data: error,
    });
  }
}
