import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProcessosComponent } from './cadastrar-processos.component';

describe('CadastrarProcessosComponent', () => {
  let component: CadastrarProcessosComponent;
  let fixture: ComponentFixture<CadastrarProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
