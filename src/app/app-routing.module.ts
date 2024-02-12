import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quartos',
    loadChildren: () =>
      import('./pages/rooms/rooms.module').then((m) => m.RoomsModule),
    data: { breadcrumb: 'Quartos' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
