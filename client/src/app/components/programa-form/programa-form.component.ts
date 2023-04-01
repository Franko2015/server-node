import { Component, HostBinding, OnInit } from '@angular/core';
import { Programas } from 'src/app/models/programas';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramasService } from 'src/app/services/programas.service';

@Component({
  selector: 'app-programa-form',
  templateUrl: './programa-form.component.html',
  styleUrls: ['./programa-form.component.css'],
})
export default class ProgramaFormComponent implements OnInit {
  @HostBinding('class') classes = 'container';

  programa: Programas = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
  };

  edit: Boolean = false;

  constructor(
    private programaServicio: ProgramasService,
    private route: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activated.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.programaServicio.getPrograma(id).subscribe(
          (res) => {
            this.programa = res;
            this.edit = true;
            console.log(this.programa);
          },
          (err) => console.log(err)
        );
      }
    });
  }

  savePrograma() {
    delete this.programa.id;
    this.programaServicio.savePrograma(this.programa).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/list']);
      },
      (err) => console.log(err)
    );
  }

  updatePrograma() {
    this.activated.params.subscribe((params) => {
      const id = params['id'];
      this.programaServicio.updatePrograma(id, this.programa).subscribe(
        (res) => {
          console.log(res);
          this.route.navigate(['/list']);
        },
        (err) => console.log(err)
      );
    });
  }
}
