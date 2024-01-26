import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'src/app/interfaces/Room';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit{

  @Input()
  data!: any[];

  dataSource = new MatTableDataSource<Room | number>(this.data);

  @Input()
  columns: string[] = [];

  @Input()
  titles: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}
}
