import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TP1Component } from './tp1.component';

describe('TP1Component', () => {
  let component: TP1Component;
  let fixture: ComponentFixture<TP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TP1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
