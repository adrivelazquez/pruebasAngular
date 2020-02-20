import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BdService } from '../../services/bd.service';
import { pipe, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';



@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  usuarios: Usuario[];
  all: any;
  albumsID: any;
  titulos: any;

  constructor(private _service: BdService) {

   }

  ngOnInit() {

    this._service.getUsuarios().subscribe(
      (resp: Usuario[]) => {
        this.usuarios=resp;
      });

  }

  mostrarAlbums( $event: any, id: string){

    let expanded :string;

    expanded=$event.target.attributes[1].value;

    if(expanded==='false'){

      this._service.getAlbumsUser(id).subscribe(
        (resp: any) => {
          this.titulos = resp;
        });

    }

  }

}
