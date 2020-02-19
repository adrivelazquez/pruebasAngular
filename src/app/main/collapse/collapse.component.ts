import { Component, OnInit } from '@angular/core';
import { BdService } from '../../services/bd.service';
import { pipe, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
Usuario

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  usuarios: Usuario[];
  all: any;

  constructor(private _service: BdService) {

   }

  ngOnInit() {

    this._service.getUsuarios().subscribe(
      (resp: Usuario[]) => {
        this.usuarios=resp;
      });

  }

}
