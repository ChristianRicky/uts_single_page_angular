import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
  path:'admin',
  loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule)
  },
  {
    path:'dashboard',component:DashboardComponent
    },
    {
      path:'',redirectTo:'dashboard',pathMatch:'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
