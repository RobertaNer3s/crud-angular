import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProcessosComponent } from './editar-processos.component';

describe('EditarProcessosComponent', () => {
  let component: EditarProcessosComponent;
  let fixture: ComponentFixture<EditarProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
