import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOderComponent } from './my-oder.component';

describe('MyOderComponent', () => {
  let component: MyOderComponent;
  let fixture: ComponentFixture<MyOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
