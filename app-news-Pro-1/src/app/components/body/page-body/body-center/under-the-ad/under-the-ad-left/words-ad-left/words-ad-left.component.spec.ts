import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsAdLeftComponent } from './words-ad-left.component';

describe('WordsAdLeftComponent', () => {
  let component: WordsAdLeftComponent;
  let fixture: ComponentFixture<WordsAdLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsAdLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsAdLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
