import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AtualizarComponent } from '../atualizar/atualizar.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'novo',
        loadChildren: () =>
          import('../new-room/new-room.module').then((m) => m.NewRoomModule),
        data: { breadcrumb: 'Cadastrar Quarto' },
      },
      {
        path: 'atualizar',
        component: AtualizarComponent,
        data: { breadcrumb: 'Atualizar Quarto' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
