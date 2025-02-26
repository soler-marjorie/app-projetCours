import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayComponentComponent } from './user-display-component.component';

describe('UserDisplayComponentComponent', () => {
  let component: UserDisplayComponentComponent;
  let fixture: ComponentFixture<UserDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDisplayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
