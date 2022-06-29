import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template } from 'src/app/model/Template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {
  templateNew:Template=new Template();
  template!:Template;
  subject!:string;
  body!:string;
  code!:string;
  language!:string;
  description!:string;
  sample!:string;
  id!:number;
  constructor(private route:ActivatedRoute,private service:TemplateService) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.getTemplate(this.id).subscribe((data)=>{
      this.template=data;
      console.log(this.template);
    this.subject=this.template.templateSubject;
    this.body=this.template.templateBody;
    this.code=this.template.templateCode;
    this.language=this.template.templateLang;
    this.description=this.template.templateDescription;
    this.sample=this.template.templateSample;
    })
    
  }
  onSave(){
    this.templateNew.templateSubject=this.subject;
    this.templateNew.templateBody=this.body;
    this.templateNew.templateCode=this.code;
    this.templateNew.templateLang=this.language;
    this.templateNew.templateDescription=this.description;
    this.templateNew.templateSample=this.sample;
    console.log(this.templateNew);
    this.service.editTemplate(this.id,this.templateNew).subscribe(()=>{});
   
    }

}
