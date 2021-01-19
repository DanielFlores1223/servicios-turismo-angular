import { Component, OnInit } from '@angular/core';
import {Photo} from '../../../interfaces/Photo';
import {PhotoService} from '../../../services/photo.service';

@Component({
  selector: 'app-list-photos-carrusel',
  templateUrl: './list-photos-carrusel.component.html',
  styleUrls: ['./list-photos-carrusel.component.css']
})
export class ListPhotosCarruselComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.photoService.getPhotos().subscribe(res => {
      this.photos = res;
    },
    err => {
      console.log(err);
    })
  }

}
