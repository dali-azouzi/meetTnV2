import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateBoardComponent } from './candidate-board.component';

describe('CandidateBoardComponent', () => {
  let component: CandidateBoardComponent;
  let fixture: ComponentFixture<CandidateBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
