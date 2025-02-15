import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1enfant1Component } from './tp1enfant1.component';

describe('Tp1enfant1Component', () => {
  let component: Tp1enfant1Component;
  let fixture: ComponentFixture<Tp1enfant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp1enfant1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp1enfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
