import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewReadingsComponent } from './last-new-readings.component';

describe('LastNewReadingsComponent', () => {
  let component: LastNewReadingsComponent;
  let fixture: ComponentFixture<LastNewReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewReadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
