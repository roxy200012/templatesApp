import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Template } from '../model/Template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http:HttpClient) { }

  getAllTemplates(){
    return this.http.get<Template[]>(`${environment.api_url}`);
  }
  getTemplate(id:number){
   return this.http.get<Template>(`${environment.api_url}/`+id);
  }
  addTemplate(template:Template){
    return this.http.post<Template>(`${environment.api_url}/one`,template);
  }
  addTemplates(templates:Template[]){
    return this.http.post<Template[]>(`${environment.api_url}`,templates);
  }
  deleteTemplate(id:number){
    return this.http.delete<Template>(`${environment.api_url}/`+id);
  }
  editTemplate(id:number,template:Template){
    return this.http.put<Template>(`${environment.api_url}/`+id,template);
  }
}
