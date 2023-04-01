import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramasService } from '../../services/programas.service'

@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.css']
})
export default class ProgramaListComponent implements OnInit {

  programas:any = [];

  constructor(private programaServicio: ProgramasService, private route: Router) { }

  ngOnInit() {
    this.getProgramas();
  }

  getProgramas(){
    this.programaServicio.getProgramas().subscribe(
      res => {
        this.programas = res;
      },
      err => console.log(err)
    );
  }

  deletePrograma(id: string){
    this.programaServicio.deletePrograma(id).subscribe(
      res => {
        console.log(res);
        this.getProgramas();
      },
      err => console.log(err)
    );
  };

  editPrograma(id: string){
    this.route.navigate([`edit/${id}`]);
  }

}
