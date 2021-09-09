import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { TattooDetailsComponent } from './tattoos/tattoo-details/tattoo-details.component';
import { LoginFormComponent } from './Admin/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ControlPanelComponent } from './Admin/control-panel/control-panel.component';
import { ToastrModule } from 'ngx-toastr';
import { ArtListComponent } from './lists/art-list/art-list.component';
import { ProjectListComponent } from './lists/project-list/project-list.component';
import { TattooListComponent } from './lists/tattoo-list/tattoo-list.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ArtDetailsComponent } from './arts/art-details/art-details.component';
import { ArtEditComponent } from './arts/art-edit/art-edit.component';
import { ArtNewComponent } from './arts/art-new/art-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { TattooNewComponent } from './tattoos/tattoo-new/tattoo-new.component';
import { TattooEditComponent } from './tattoos/tattoo-edit/tattoo-edit.component';
import { TattooShowcaseComponent } from './tattoos/tattoo-showcase/tattoo-showcase.component';
import { ProjectShowcaseComponent } from './projects/project-showcase/project-showcase.component';
import { ArtShowcaseComponent } from './arts/art-showcase/art-showcase.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TattooDetailsComponent,
    LoginFormComponent,
    ProjectDetailsComponent,
    ControlPanelComponent,
    ArtListComponent,
    ProjectListComponent,
    TattooListComponent,
    ArtDetailsComponent,
    ArtEditComponent,
    ArtNewComponent,
    ProjectEditComponent,
    ProjectNewComponent,
    TattooNewComponent,
    TattooEditComponent,
    TattooShowcaseComponent,
    ProjectShowcaseComponent,
    ArtShowcaseComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule,
    SlideshowModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
