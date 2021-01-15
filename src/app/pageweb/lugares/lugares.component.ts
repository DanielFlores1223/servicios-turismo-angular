import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor(private router:Router) { }
  ocultar1:boolean=false
  ocultar2:boolean=false
  ocultar3:boolean=false
  ocultar4:boolean;
  mensaje:string;
  lugar:boolean;

  async ngOnInit(): Promise<void> {
    //al dar clic en las rutas te dirija haci arriba
    await this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd)) { 
       return; 
      } 
      window.scrollTo(0, 0) 
     }); 
    
    if(this.ocultar4=true){
      this.ocultar4=true;
    }
  }
  navegacion(){
    this.ocultar1=true;
    this.ocultar4=false;
    this.router.navigate(["catedral"],);
    
    
  }
  navegacionn(){
    this.router.navigate(["/teatro"]);
    this.ocultar2=true;
    this.ocultar4=false;
  }
  navegacionnn(){
    this.ocultar3=true;
    this.ocultar4=false;
    top;this.router.navigate(["/rotonda"]);
    
  }
  navegacionnnn(){
    top;this.router.navigate(["/centroH"]);
    this.ocultar4=true;
  }

}
