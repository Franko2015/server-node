import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import list  from './components/programa-list/programa-list.component';
import add  from './components/programa-form/programa-form.component';
import home  from './components/home/home.component';
import contact  from './components/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: home
  },
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: list
  },
  {
    path: "",
    redirectTo: "/add",
    pathMatch: "full"
  },
  {
    path: "add",
    component: add
  },
  {
    path: "",
    redirectTo: "/contact",
    pathMatch: "full"
  },
  {
    path: "contact",
    component: contact
  },
  {
    path: "edit/:id",
    component: add
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
