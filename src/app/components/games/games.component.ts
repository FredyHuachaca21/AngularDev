import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  // Input para recibir el nombre de usuario desde el componente padre
  @Input() username ='Usuario Desconocido';

  @Output() agregarJuegoFavoritoEvent: EventEmitter<string> = new EventEmitter<string>();

  agregarJuegoFavorito(nombreJuego: string) {
    this.agregarJuegoFavoritoEvent.emit(nombreJuego);
    // alert(`Juego ${nombreJuego} agregado a favoritos`);
  }

  games = [
    {
      id: 1,
      name: 'Call of Duty'
    },
    {
      id: 2,
      name: 'FIFA 21'
    },
    {
      id: 3,
      name: 'GTA V'
    },
    {
      id: 4,
      name: 'Red Dead Redemption 2'
    },
    {
      id: 5,
      name: 'Minecraft'
    }
  ]

}
