import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-show-favorite-button',
  templateUrl: './show-favorite-button.component.html',
  styleUrls: ['./show-favorite-button.component.css']
})
export class ShowFavoriteButtonComponent implements OnInit {

  heartIcon = faHeart;
  @Output() showFavorite = new EventEmitter<boolean>();
  @Input() favorite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.showFavorite.emit(true);
  }

}
