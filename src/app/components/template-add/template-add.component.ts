import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Template } from 'src/app/model/Template';
import { TemplateService } from 'src/app/services/template.service';
@Component({
  selector: 'app-template-add',
  templateUrl: './template-add.component.html',
  styleUrls: ['./template-add.component.css']
})
export class TemplateAddComponent implements OnInit {
  template:Template=new Template();
  subject='';
  body='';
  code='';
  language='';
  description='';
  sample='';
  constructor(private service:TemplateService) { }

  ngOnInit(): void {

  }
 onSave(){
 this.template.templateSubject=this.subject;
 this.template.templateBody=this.body;
 this.template.templateCode=this.code;
 this.template.templateLang=this.language;
 this.template.templateDescription=this.description;
 this.template.templateSample=this.sample;
 console.log(this.template);
 this.service.addTemplate(this.template).subscribe(()=>{});

 }
}
