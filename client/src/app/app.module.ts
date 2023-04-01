import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import  AppComponent  from './app.component';
import NavComponent from './components/nav/nav.component';
import  ProgramaFormComponent  from './components/programa-form/programa-form.component';
import  ProgramaListComponent  from './components/programa-list/programa-list.component';
import { ProgramasService } from './services/programas.service';

@NgModule({
  declarations: [			
    AppComponent,
      NavComponent,
      ProgramaFormComponent,
      ProgramaListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProgramasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
