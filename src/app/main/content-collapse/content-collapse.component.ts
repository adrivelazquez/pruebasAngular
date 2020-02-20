import { Component, OnInit, Input } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-content-collapse',
  templateUrl: './content-collapse.component.html',
  styleUrls: ['./content-collapse.component.css']
})
export class ContentCollapseComponent implements OnInit {

  @Input() idCollapse:string='';
  @Input() heading:string='';
  @Input() albums: any;


  constructor(private _service: BdService) {
    
   }

  ngOnInit() {
  }


}
