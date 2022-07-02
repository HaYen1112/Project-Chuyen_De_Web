import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAdLeftComponent } from './img-ad-left.component';

describe('ImgAdLeftComponent', () => {
  let component: ImgAdLeftComponent;
  let fixture: ComponentFixture<ImgAdLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAdLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAdLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
