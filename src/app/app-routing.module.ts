import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateAddComponent } from './components/template-add/template-add.component';
import { TemplateDeleteComponent } from './components/template-delete/template-delete.component';
import { TemplateDetailComponent } from './components/template-detail/template-detail.component';
import { TemplateEditComponent } from './components/template-edit/template-edit.component';
import { TemplatesTableComponent } from './components/templates-table/templates-table.component';

const routes: Routes = [
  {path:'',component:TemplatesTableComponent}, 
   {path:'add',component:TemplateAddComponent},
  {path:':id',component:TemplateDetailComponent},
  {path:'edit/:id',component:TemplateEditComponent},
  {path:'delete/:id',component:TemplateDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
