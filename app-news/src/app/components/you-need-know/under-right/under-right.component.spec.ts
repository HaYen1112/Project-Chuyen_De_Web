import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderRightComponent } from './under-right.component';

describe('UnderRightComponent', () => {
  let component: UnderRightComponent;
  let fixture: ComponentFixture<UnderRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
