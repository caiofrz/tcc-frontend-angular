import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuItem } from 'primeng/api';
import { Observable, catchError, of, tap } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { PageResponse } from 'src/app/interfaces/PageResponse';
import { Room } from 'src/app/interfaces/Room';
import { RoomsService } from 'src/app/services/rooms.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  rooms$!: Observable<PageResponse>;
  displayedColumns = ['number', 'type', 'bedQuantity', 'dailyRate', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageIndex = 0;
  pageSize = 10;

  constructor(
    private service: RoomsService,
    public dialog: MatDialog,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.set('@ChildOne', 'Child One');
    this.refresh();
  }

  refresh( pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 5}){
    this.rooms$ = this.service.findAll(pageEvent.pageIndex, pageEvent.pageSize).pipe(
      tap(()=>{
        this.pageIndex = pageEvent.pageIndex
        this.pageSize = pageEvent.pageSize
      }),
      catchError((error) => {
        this.openDialogError('Erro ao carregar a lista de quartos!');
        return of({
          page: 0,
          size: 0,
          totalPages: 0,
          totalElements: 0,
          data: []
        });
      })
    );
  }

  openDialogError(error: string) {
    this.dialog.open(DialogComponent, {
      data: error,
    });
  }
}
