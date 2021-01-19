import { Component, OnInit } from '@angular/core';
import {Photo} from '../../../interfaces/Photo';
import {PhotoService} from '../../../services/photo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-photos-carrusel',
  templateUrl: './list-photos-carrusel.component.html',
  styleUrls: ['./list-photos-carrusel.component.css']
})
export class ListPhotosCarruselComponent implements OnInit {
  photos: Photo[] = [];
  pageActual = 1;

  constructor(private photoService: PhotoService, private router: Router) { }

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

  deletePhoto(id: string){
    this.photoService.deletePhoto(id).subscribe(res => {
      this.getPhotos();
    },
    err => {
      console.log(err);
    })
  }

}
