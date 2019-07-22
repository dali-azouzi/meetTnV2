import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseBoardComponent } from './entreprise-board.component';

describe('EntrepriseBoardComponent', () => {
  let component: EntrepriseBoardComponent;
  let fixture: ComponentFixture<EntrepriseBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
