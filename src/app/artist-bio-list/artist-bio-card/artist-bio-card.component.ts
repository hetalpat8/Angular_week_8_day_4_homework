import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArtistItem } from '../../shared/artist-bio';

@Component({
  selector: 'app-artist-bio-card',
  templateUrl: './artist-bio-card.component.html',
  styleUrls: ['./artist-bio-card.component.scss']
})
export class ArtistBioCardComponent implements OnInit {

  // Input Data for our artist item
  @Input() item: ArtistItem | any;

  // Outputs for the xButton(deleting the card) and CaldClick action(updating the card)
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onXButtonClick(){
    //send signal to the x button to delete the card
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}