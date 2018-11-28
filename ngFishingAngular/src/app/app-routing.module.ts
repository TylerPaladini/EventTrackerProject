import { FishingdaysComponent } from './fishingdays/fishingdays.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfishingdayComponent } from './addfishingday/addfishingday.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fishingdays'},
  { path: 'fishingdays', component: FishingdaysComponent  },
  { path: 'addfishingday', component: AddfishingdayComponent },
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
