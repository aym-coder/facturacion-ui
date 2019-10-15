import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './@modules/collector/collector.module#CollectorModule', canActivate: [AuthGuard]},
  {path: 'login', data: { title: 'Collectors'}, loadChildren: './@modules/auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
