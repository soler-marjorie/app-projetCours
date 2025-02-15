import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1enfant22Component } from './tp1enfant2-2.component';

describe('Tp1enfant22Component', () => {
  let component: Tp1enfant22Component;
  let fixture: ComponentFixture<Tp1enfant22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp1enfant22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp1enfant22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
