import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { RejectedComponent } from './rejected/rejected.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { ValidateComponent } from './validate/validate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    
  },
  {
    path: "upload",
    component: UploadComponent,
    
  },
  {
    path: "search",
    component: SearchComponent,
    
  },
  {
    path: "approve",
    component: ApproveComponent,
    
  },
  {
    path: "history",
    component: HistoryComponent,
    
  },
  {
    path: "rejected",
    component: RejectedComponent,
    
  },
  {
    path: "validate",
    component: ValidateComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
