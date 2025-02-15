import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1enfant21Component } from './tp1enfant2-1.component';

describe('Tp1enfant21Component', () => {
  let component: Tp1enfant21Component;
  let fixture: ComponentFixture<Tp1enfant21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp1enfant21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp1enfant21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
