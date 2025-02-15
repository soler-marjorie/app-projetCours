import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1enfant3Component } from './tp1enfant3.component';

describe('Tp1enfant3Component', () => {
  let component: Tp1enfant3Component;
  let fixture: ComponentFixture<Tp1enfant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp1enfant3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp1enfant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
