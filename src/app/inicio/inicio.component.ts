import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if (environment.token == '') {

      alert('Sua seção expirou! Faça o login novamente (:')
      this.router.navigate(['/entrar'])

    }

    this.getAllTemas()

    
    }
    getAllTemas(){
      this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }



