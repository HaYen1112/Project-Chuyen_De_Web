import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNewComponent } from './hot-new.component';

describe('HotNewComponent', () => {
  let component: HotNewComponent;
  let fixture: ComponentFixture<HotNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
