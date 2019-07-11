import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ParticipateComponent } from './components/participate/participate.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'participate', component: ParticipateComponent },
  { path: 'project', component: ProjectComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
