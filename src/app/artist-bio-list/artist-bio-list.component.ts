import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ArtistItem } from '../shared/artist-bio';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent{
  old: ArtistItem;
  new: ArtistItem;
}

@Component({
  selector: 'app-artist-bio-list',
  templateUrl: './artist-bio-list.component.html',
  styleUrls: ['./artist-bio-list.component.scss']
})
export class ArtistBioListComponent implements OnInit {

  @Input() artistItems: ArtistItem[] = []

  // Adding Outputs for Updates and Deletes
  @Output() delete: EventEmitter<ArtistItem> = new EventEmitter<ArtistItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  onDelete(item: ArtistItem){
    this.delete.emit(item);
  }

  //Update Method
  onCardClicked(item: ArtistItem){
    // Show the Edit Modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
