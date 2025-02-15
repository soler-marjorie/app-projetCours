import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cour1Component } from './cour1.component';

describe('Cour1Component', () => {
  let component: Cour1Component;
  let fixture: ComponentFixture<Cour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cour1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
