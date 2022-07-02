import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTheAdRightComponent } from './under-the-ad-right.component';

describe('UnderTheAdRightComponent', () => {
  let component: UnderTheAdRightComponent;
  let fixture: ComponentFixture<UnderTheAdRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderTheAdRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderTheAdRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
