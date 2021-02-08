import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminBlogAddComponent } from './admin-blog-add/admin-blog-add.component';
import { AdminBlogUpdateFormComponent } from './admin-blog/admin-blog-update-form/admin-blog-update-form.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminFeatureAddComponent } from './admin-feature-add/admin-feature-add.component';
import { AdminFeatureUpdateComponent } from './admin-feature/admin-feature-update/admin-feature-update.component';
import { AdminFirstComponent } from './admin-first/admin-first.component';
import { AdminFullcalendarComponent } from './admin-fullcalendar/admin-fullcalendar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminServiceBackendAddComponent } from './admin-service-backend-add/admin-service-backend-add.component';
import { AdminServiceDatabaseAddComponent } from './admin-service-database-add/admin-service-database-add.component';
import { AdminServiceDevopsAddComponent } from './admin-service-devops-add/admin-service-devops-add.component';
import { AdminServiceFrontendAddComponent } from './admin-service-frontend-add/admin-service-frontend-add.component';
import { BackendUpdateFormComponent } from './admin-service/admin-service-backend/backend-update-form/backend-update-form.component';
import { DatabaseUpdateFormComponent } from './admin-service/admin-service-database/database-update-form/database-update-form.component';
import { DevopsUpdateFormComponent } from './admin-service/admin-service-devops/devops-update-form/devops-update-form.component';
import { FrontendUpdateFormComponent } from './admin-service/admin-service-frontend/frontend-update-form/frontend-update-form.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import { AdminWorkAddComponent } from './admin-work-add/admin-work-add.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { WorkUpdateFormComponent } from './admin-work/work-update-form/work-update-form.component';
import { AdminComponent } from './admin/admin.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientBlogPageComponent } from './client-blog-page/client-blog-page.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientServiceBackendComponent } from './client-service-backend/client-service-backend.component';
import { ClientServiceDatabaseComponent } from './client-service-database/client-service-database.component';
import { ClientServiceDevopsComponent } from './client-service-devops/client-service-devops.component';
import { ClientServiceFrontendComponent } from './client-service-frontend/client-service-frontend.component';
import { ClientWorkComponent } from './client-work/client-work.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [

  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'home', component: ClientHomeComponent },
      { path: 'service-backend', component: ClientServiceBackendComponent },
      { path: 'service-frontend', component: ClientServiceFrontendComponent },
      { path: 'service-database', component: ClientServiceDatabaseComponent },
      { path: 'service-devops', component: ClientServiceDevopsComponent },
      { path: 'work', component: ClientWorkComponent },
      { path: 'about', component: ClientAboutComponent },
      { path: 'blog', component: ClientBlogComponent },
      { path: 'blog/:blogId', component: ClientBlogPageComponent },
      { path: 'contact', component: ClientContactComponent },
      { path: '', component: ClientHomeComponent, pathMatch: 'full' },
    ],
  },
 
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminFirstComponent, canActivate:[LoginGuard] },
      { path: 'firstpage', component: AdminFirstComponent, canActivate:[LoginGuard] },
      { path: 'fullcalendar', component: AdminFullcalendarComponent, canActivate:[LoginGuard] },
      { path: 'nav', component: NavComponent, canActivate:[LoginGuard] },
      { path: 'side', component: SideComponent, canActivate:[LoginGuard] },
      { path: 'home', component: AdminHomeComponent, canActivate:[LoginGuard] },
      { path: 'home/feature/add', component: AdminFeatureAddComponent, canActivate:[LoginGuard] },
      { path: 'service', component: AdminServiceComponent, canActivate:[LoginGuard] },
      { path: 'service/backend/add', component: AdminServiceBackendAddComponent, canActivate:[LoginGuard] },
      { path: 'service/frontend/add', component: AdminServiceFrontendAddComponent, canActivate:[LoginGuard] },
      { path: 'service/database/add', component: AdminServiceDatabaseAddComponent, canActivate:[LoginGuard] },
      { path: 'service/devops/add', component: AdminServiceDevopsAddComponent, canActivate:[LoginGuard] },
      { path: 'work', component: AdminWorkComponent, canActivate:[LoginGuard] },
      { path: 'work/add', component: AdminWorkAddComponent, canActivate:[LoginGuard] },
      { path: 'about', component: AdminAboutComponent, canActivate:[LoginGuard] },
      { path: 'blog', component: AdminBlogComponent, canActivate:[LoginGuard] },
      { path: 'blog/add', component: AdminBlogAddComponent, canActivate:[LoginGuard] },
      { path: 'home/feature/:featureId', component: AdminFeatureUpdateComponent, canActivate:[LoginGuard] },
      { path: 'service/backend/:backendId', component: BackendUpdateFormComponent, canActivate:[LoginGuard] },
      { path: 'service/frontend/:frontendId', component: FrontendUpdateFormComponent, canActivate:[LoginGuard] },
      { path: 'service/database/:databaseId', component: DatabaseUpdateFormComponent, canActivate:[LoginGuard] },
      { path: 'service/devops/:devopsId', component: DevopsUpdateFormComponent, canActivate:[LoginGuard] },
      { path: 'work/jop/:workId', component: WorkUpdateFormComponent, canActivate:[LoginGuard] },
      { path: 'blog/blog/:blogId', component: AdminBlogUpdateFormComponent, canActivate:[LoginGuard] },
      
    
    ], canActivate:[LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  




  // {path:'home', component:ClientHomeComponent},
  // {path:'service-backend', component:ClientServiceBackendComponent},
  // {path:'service-frontend', component:ClientServiceFrontendComponent},
  // {path:'service-database', component:ClientServiceDatabaseComponent},
  // {path:'service-devops', component:ClientServiceDevopsComponent},
  // {path:'work', component:ClientWorkComponent},
  // {path:'about', component:ClientAboutComponent},
  // {path:'blog', component:ClientBlogComponent},
  // {path:'blog/:blogId', component:ClientBlogPageComponent},
  // {path:'contact', component:ClientContactComponent},
  // {path:'', component:ClientHomeComponent,pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
