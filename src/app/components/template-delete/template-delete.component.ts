import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template } from 'src/app/model/Template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template-delete',
  templateUrl: './template-delete.component.html',
  styleUrls: ['./template-delete.component.css']
})
export class TemplateDeleteComponent implements OnInit {

  template!:Template;

  constructor(private service:TemplateService,private route:ActivatedRoute) { }
id!:number;
  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id')!)
    this.service.getTemplate(this.id).subscribe((data)=>{
      this.template=data;
    })
  }
 delete(){
  this.service.deleteTemplate(this.id).subscribe(()=>{});
 }
}
