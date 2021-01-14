import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
//fullcalendar
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);


import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { ClientNavComponent } from './client-nav/client-nav.component';
import { ClientFooterComponent } from './client-footer/client-footer.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientServiceBackendComponent } from './client-service-backend/client-service-backend.component';
import { ClientServiceFrontendComponent } from './client-service-frontend/client-service-frontend.component';
import { ClientServiceDatabaseComponent } from './client-service-database/client-service-database.component';
import { ClientServiceDevopsComponent } from './client-service-devops/client-service-devops.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientWorkComponent } from './client-work/client-work.component';
import { ClientAboutComponent } from './client-about/client-about.component';
import { ClientBlogComponent } from './client-blog/client-blog.component';
import { ClientBlogPageComponent } from './client-blog-page/client-blog-page.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientHappyClientsComponent } from './client-happy-clients/client-happy-clients.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { ClientFeatureComponent } from './client-feature/client-feature.component';
import { AdminHomeFormComponent } from './admin-home/admin-home-form/admin-home-form.component';
import { FormsModule }   from '@angular/forms';
import { AdminFeatureComponent } from './admin-feature/admin-feature.component';
import { AdminFeatureUpdateComponent } from './admin-feature/admin-feature-update/admin-feature-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';





import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminFirstComponent } from './admin-first/admin-first.component';
import { AdminServiceBackendComponent } from './admin-service/admin-service-backend/admin-service-backend.component';
import { AdminServiceFrontendComponent } from './admin-service/admin-service-frontend/admin-service-frontend.component';
import { AdminServiceDatabaseComponent } from './admin-service/admin-service-database/admin-service-database.component';
import { AdminServiceDevopsComponent } from './admin-service/admin-service-devops/admin-service-devops.component';
import { BackendUpdateFormComponent } from './admin-service/admin-service-backend/backend-update-form/backend-update-form.component';
import { FrontendUpdateFormComponent } from './admin-service/admin-service-frontend/frontend-update-form/frontend-update-form.component';
import { DatabaseUpdateFormComponent } from './admin-service/admin-service-database/database-update-form/database-update-form.component';
import { DevopsUpdateFormComponent } from './admin-service/admin-service-devops/devops-update-form/devops-update-form.component';
import { WorkUpdateFormComponent } from './admin-work/work-update-form/work-update-form.component';
import { AdminChartsLearningtechComponent } from './admin-charts-learningtech/admin-charts-learningtech.component';
import { AdminInfoboxComponent } from './admin-infobox/admin-infobox.component';
import { AdminBlogUpdateFormComponent } from './admin-blog/admin-blog-update-form/admin-blog-update-form.component';
import { AdminFeatureAddComponent } from './admin-feature-add/admin-feature-add.component';
import { AdminServiceBackendAddComponent } from './admin-service-backend-add/admin-service-backend-add.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { AdminFullcalendarComponent } from './admin-fullcalendar/admin-fullcalendar.component';










@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    SideComponent,
    ClientNavComponent,
    ClientFooterComponent,
    ClientServiceComponent,
    ClientHomeComponent,
    ClientServiceBackendComponent,
    ClientServiceFrontendComponent,
    ClientServiceDatabaseComponent,
    ClientServiceDevopsComponent,
    ClientHeaderComponent,
    ClientWorkComponent,
    ClientAboutComponent,
    ClientBlogComponent,
    ClientBlogPageComponent,
    ClientContactComponent,
    ClientHappyClientsComponent,
    AdminComponent,
    ClientComponent,
    AdminHomeComponent,
    AdminServiceComponent,
    AdminWorkComponent,
    AdminAboutComponent,
    AdminBlogComponent,
    ClientFeatureComponent,
    AdminHomeFormComponent,
    AdminFeatureComponent,
    AdminFeatureUpdateComponent,
    AdminFirstComponent,
    AdminServiceBackendComponent,
    AdminServiceFrontendComponent,
    AdminServiceDatabaseComponent,
    AdminServiceDevopsComponent,
    BackendUpdateFormComponent,
    FrontendUpdateFormComponent,
    DatabaseUpdateFormComponent,
    DevopsUpdateFormComponent,
    WorkUpdateFormComponent,
    AdminChartsLearningtechComponent,
    AdminInfoboxComponent,
    AdminBlogUpdateFormComponent,
    AdminFeatureAddComponent,
    AdminServiceBackendAddComponent,
    FullcalendarComponent,
    AdminFullcalendarComponent
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FullCalendarModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
