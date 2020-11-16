import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesignupComponent } from './reactivesignup.component';

describe('ReactivesignupComponent', () => {
  let component: ReactivesignupComponent;
  let fixture: ComponentFixture<ReactivesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivesignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
