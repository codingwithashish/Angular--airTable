import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproposedtalentsComponent } from './allproposedtalents.component';

describe('AllproposedtalentsComponent', () => {
  let component: AllproposedtalentsComponent;
  let fixture: ComponentFixture<AllproposedtalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproposedtalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllproposedtalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
