import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeleteComponent } from './template-delete.component';

describe('TemplateDeleteComponent', () => {
  let component: TemplateDeleteComponent;
  let fixture: ComponentFixture<TemplateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
