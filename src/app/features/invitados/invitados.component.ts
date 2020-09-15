import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { InvitadosService } from 'src/app/services/invitados.service';
import { Invitado } from 'src/app/models/invitado';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {
  invitados: Invitado[];

  constructor(private _invitadosService: InvitadosService) { }

  ngOnInit() 
  {

  }

}
