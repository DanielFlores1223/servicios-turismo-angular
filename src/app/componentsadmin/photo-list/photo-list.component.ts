import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];//creamos list vacia


  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos()//utilizamos el metodo getphotos y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.photos = res;//utilizamos la propiedad photos lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);//redirecciona
  }

}
