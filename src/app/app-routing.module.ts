import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './Admin/login-form/login-form.component';
import { ControlPanelComponent } from './Admin/control-panel/control-panel.component';
import { ArtDetailsComponent } from './arts/art-details/art-details.component';
import { ArtNewComponent } from './arts/art-new/art-new.component';
import { ArtEditComponent } from './arts/art-edit/art-edit.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { TattooDetailsComponent } from './tattoos/tattoo-details/tattoo-details.component';
import { TattooNewComponent } from './tattoos/tattoo-new/tattoo-new.component';
import { TattooEditComponent } from './tattoos/tattoo-edit/tattoo-edit.component';
import { TattooShowcaseComponent } from './tattoos/tattoo-showcase/tattoo-showcase.component';
import { ProjectShowcaseComponent } from './projects/project-showcase/project-showcase.component';
import { ArtShowcaseComponent } from './arts/art-showcase/art-showcase.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component: TattooShowcaseComponent},
  {path:'login', component: LoginFormComponent},
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: 
    [
      {path:'control-panel', component: ControlPanelComponent, canActivate: [AuthGuard]},
      {path:'art-new', component: ArtNewComponent, canActivate: [AuthGuard]},
      {path:'project-new', component: ProjectNewComponent, canActivate: [AuthGuard]},
      {path:'tattoo-new', component: TattooNewComponent, canActivate: [AuthGuard]},
      {path:'art-edit/:_id', component: ArtEditComponent, canActivate: [AuthGuard]},
      {path:'project-edit/:_id', component: ProjectEditComponent, canActivate: [AuthGuard]},
      {path:'tattoo-edit/:_id', component: TattooEditComponent, canActivate: [AuthGuard]},
    ]
  },
  {path:'arts/:_id', component: ArtDetailsComponent},
  {path:'arts', component: ArtShowcaseComponent},
  {path:'projects/:_id', component: ProjectDetailsComponent},
  {path:'projects', component: ProjectShowcaseComponent},
  {path:'tattoos/:_id', component: TattooDetailsComponent},
  {path:'tattoos', component: TattooShowcaseComponent},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
