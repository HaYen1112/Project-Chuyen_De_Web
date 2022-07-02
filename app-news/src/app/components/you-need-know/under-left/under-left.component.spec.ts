import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderLeftComponent } from './under-left.component';

describe('UnderLeftComponent', () => {
  let component: UnderLeftComponent;
  let fixture: ComponentFixture<UnderLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
