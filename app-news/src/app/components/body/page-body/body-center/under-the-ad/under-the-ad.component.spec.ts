import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTheAdComponent } from './under-the-ad.component';

describe('UnderTheAdComponent', () => {
  let component: UnderTheAdComponent;
  let fixture: ComponentFixture<UnderTheAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderTheAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderTheAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
