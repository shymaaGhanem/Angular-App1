import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutSComponent } from './about-s/about-s.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { OUREXPERTISEComponent } from './ourexpertise/ourexpertise.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutSComponent},
  {path: 'ourexpertise', component: OUREXPERTISEComponent},
  {path: 'join-us', component: JoinUsComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
