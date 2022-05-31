import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiReqComponent } from './api-req/api-req.component'
import { ApiFullComponent } from './api-full/api-full.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  {path:'compact', component: ApiReqComponent},
  {path:'full', component: ApiFullComponent},
  {path:'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
