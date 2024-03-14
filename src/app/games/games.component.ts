import { Component, EventEmitter, Input, Output} from '@angular/core';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav (gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: "uncharted 4"
    },

    {
      id:2,
      name: "Horizon Zero Dawn"
    },
    {
      id:3,
      name: "Bloodborne"
    }
  ]

}
