import { Component, OnInit } from '@angular/core';
import {Photo} from '../../interfaces/Photo';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private photoService: PhotoService) { }
  photos: Photo[] = [];

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
