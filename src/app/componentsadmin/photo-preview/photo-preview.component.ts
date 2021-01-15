import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { PhotoService } from '../../services/photo.service';
import {Photo} from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(private activatedRoute: ActivatedRoute,private photoService: PhotoService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.photoService.getPhoto(this.id)//una vez tengo ese valor  desde photoservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/photos']);
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos'])
      },
      error => console.log(error)
      )
    return false;//returna un false para cancel el event
  }

}
