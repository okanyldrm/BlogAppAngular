import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminFeatureUpdateComponent } from './admin-feature/admin-feature-update/admin-feature-update.component';
import { AdminFirstComponent } from './admin-first/admin-first.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BackendUpdateFormComponent } from './admin-service/admin-service-backend/backend-update-form/backend-update-form.component';
import { DatabaseUpdateFormComponent } from './admin-service/admin-service-database/database-update-form/database-update-form.component';
import { DevopsUpdateFormComponent } from './admin-service/admin-service-devops/devops-update-form/devops-update-form.component';
import { FrontendUpdateFormComponent } from './admin-service/admin-service-frontend/frontend-update-form/frontend-update-form.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
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
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [

  {
    path: 'client',
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
      { path: '', component: AdminFirstComponent },
      { path: 'nav', component: NavComponent },
      { path: 'side', component: SideComponent },
      { path: 'home', component: AdminHomeComponent },
      { path: 'service', component: AdminServiceComponent },
      { path: 'work', component: AdminWorkComponent },
      { path: 'about', component: AdminAboutComponent },
      { path: 'blog', component: AdminBlogComponent },
      { path: 'home/feature/:featureId', component: AdminFeatureUpdateComponent },
      { path: 'service/backend/:backendId', component: BackendUpdateFormComponent },
      { path: 'service/frontend/:frontendId', component: FrontendUpdateFormComponent },
      { path: 'service/database/:databaseId', component: DatabaseUpdateFormComponent },
      { path: 'service/devops/:devopsId', component: DevopsUpdateFormComponent },
      { path: 'work/jop/:workId', component: WorkUpdateFormComponent },
    
    ],
  },


  // {
  //   path: '',
  //   component: AdminComponent, pathMatch:'full'
  // },


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
