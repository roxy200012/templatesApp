import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template } from 'src/app/model/Template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {
template!:Template;

  constructor(private service:TemplateService,private route:ActivatedRoute) { }
id!:number;
  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id')!)
    this.service.getTemplate(this.id).subscribe((data)=>{
      this.template=data;
    })
  }
  
}
