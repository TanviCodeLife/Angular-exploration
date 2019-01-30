import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;
  showEditForm: boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
    this.showEditForm = false;
  }

  beginDeletingAlbum(albumToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.albumService.deleteAlbum(albumToDelete);
    }
  }

  editAlbum(){
    this.showEditForm = true;
  }

}
