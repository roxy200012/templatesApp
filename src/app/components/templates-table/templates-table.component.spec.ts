import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesTableComponent } from './templates-table.component';

describe('TemplatesTableComponent', () => {
  let component: TemplatesTableComponent;
  let fixture: ComponentFixture<TemplatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
