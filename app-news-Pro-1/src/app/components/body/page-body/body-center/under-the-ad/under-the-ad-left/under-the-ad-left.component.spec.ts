import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTheAdLeftComponent } from './under-the-ad-left.component';

describe('UnderTheAdLeftComponent', () => {
  let component: UnderTheAdLeftComponent;
  let fixture: ComponentFixture<UnderTheAdLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderTheAdLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderTheAdLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
