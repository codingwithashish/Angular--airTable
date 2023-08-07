import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposelComponent } from './proposel.component';

describe('ProposelComponent', () => {
  let component: ProposelComponent;
  let fixture: ComponentFixture<ProposelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
