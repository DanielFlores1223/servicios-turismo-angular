import { Component, OnInit } from '@angular/core';
import {Photo} from '../../interfaces/Photo';
import {PhotoService} from '../../services/photo.service';
import {Dominio} from '../../interfaces/Dominio';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private photoService: PhotoService) { }
  photos: Photo[] = [];
  url = Dominio.URL;
  
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
