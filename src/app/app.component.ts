import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  sidebarItems = [
    { name: 'Caderno', icon: 'menu_book', route: '/' },
    { name: 'Funcionários', icon: 'groups', route: '/' },
    { name: 'Quartos', icon: 'king_bed', route: '/quartos' },
    { name: 'Reservas', icon: 'calendar_today', route: '/' },
    { name: 'Relatórios', icon: 'stacked_line_chart', route: '/' },
    { name: 'Despesas', icon: 'attach_money', route: '/' },
  ];
}
