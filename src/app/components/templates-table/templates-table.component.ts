import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { Template } from 'src/app/model/Template';

import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-templates-table',
  templateUrl: './templates-table.component.html',
  styleUrls: ['./templates-table.component.css'],
})
export class TemplatesTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'subject',
    'code',
    'lang',
    'description',
    'actions',
  ];
  dataSource = new MatTableDataSource<Template>();
  constructor(private service: TemplateService) {}

  ngOnInit(): void {
    this.service.getAllTemplates().subscribe((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    });
  }
  exportAsXLSX(): void {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'templates');
    XLSX.writeFile(workBook, 'templates.xlsx');
  }
  filelist: any;
  file!: File;
  arrayBuffer: any;
  incomingfile() {
    const inputNode: any = document.querySelector('#file');

  
    this.file =inputNode.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      var arraylist:Template[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.filelist = [];
     this.service.addTemplates(arraylist).subscribe(()=>{});
   
    };
  }
}
