import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Programas } from '../models/programas'
import { Observable } from 'rxjs';

@Injectable()
export class ProgramasService {

constructor(private http: HttpClient) { }
 API_URI = 'http://localhost:3000';

 getProgramas(){
    return this.http.get(`${this.API_URI}/programas`);
 }

 getPrograma(id: string){
    return this.http.get(`${this.API_URI}/programas/${id}`);
 }
 
 deletePrograma(id: string){
    return this.http.delete(`${this.API_URI}/programas/${id}`);
 }

 savePrograma(programa: Programas){
    return this.http.post(`${this.API_URI}/programas`, programa);
 }

 updatePrograma(id: number|string, UpdatedPrograma: Programas): Observable<Programas>{
    return this.http.put(`${this.API_URI}/programas/${id}`, UpdatedPrograma);
 }

}
