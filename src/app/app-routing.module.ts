import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChallengeComponent} from './challenge/challenge.component';

import {UploadchallengeComponent} from "./uploadchallenge/uploadchallenge.component";
const routes: Routes = [

  { path: '', redirectTo: '/challenge', pathMatch: 'full' },
   { path: 'challenge', component: ChallengeComponent },
   {path:'uploadchallenge',component:UploadchallengeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
