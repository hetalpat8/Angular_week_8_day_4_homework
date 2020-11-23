import { Component, OnInit } from '@angular/core';
import { ArtistItem } from '../shared/artist-bio';
import { UpdateEvent } from '../artist-bio-list/artist-bio-list.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  artistsItems: ArtistItem[] = new Array<ArtistItem>()

  // Total artist Counter
  totalArtist: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // AddItem method (Add Items to the array)
  addItem(newItem: ArtistItem){
    this.artistsItems.push(newItem)
    this.totalArtist += newItem.amount
  }

  // Delete Method (Which will handle the deletion of each individual card)
  deleteItem(item: ArtistItem){
    let index = this.artistsItems.indexOf(item);
    this.artistsItems.splice(index,1);
    this.totalArtist -= item.amount;
  }

  // Update Method (Which will handle the update of the individual cards)
  updateItem(updateEvent: UpdateEvent){
    // replace the item with the updated/submitted item from the form 
    this.artistsItems[this.artistsItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalArtist -= updateEvent.old.amount;
    this.totalArtist += updateEvent.new.amount;
  }
}
