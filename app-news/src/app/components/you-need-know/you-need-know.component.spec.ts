import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouNeedKnowComponent } from './you-need-know.component';

describe('YouNeedKnowComponent', () => {
  let component: YouNeedKnowComponent;
  let fixture: ComponentFixture<YouNeedKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouNeedKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouNeedKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
