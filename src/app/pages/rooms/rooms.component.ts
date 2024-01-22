import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'src/app/interfaces/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements AfterViewInit {
  rooms = new MatTableDataSource<Room>(DATA);

  displayedColumns = ['number', 'type', 'bedQuantity', 'dailyRate', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.rooms.paginator = this.paginator;
  }

  constructor() {}
}

const DATA: Room[] = [
  {
    id: 'string',
    number: '1',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
  {
    id: 'string',
    number: '2',
    bedQuantity: 1,
    description: 'string',
    type: 'Solteiro',
    dailyRate: 10.0,
  },
];
