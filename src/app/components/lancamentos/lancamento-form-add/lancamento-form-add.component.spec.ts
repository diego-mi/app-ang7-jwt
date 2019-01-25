import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoFormAddComponent } from './lancamento-form-add.component';

describe('LancamentoFormAddComponent', () => {
  let component: LancamentoFormAddComponent;
  let fixture: ComponentFixture<LancamentoFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
