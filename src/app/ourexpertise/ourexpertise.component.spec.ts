import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OUREXPERTISEComponent } from './ourexpertise.component';

describe('OUREXPERTISEComponent', () => {
  let component: OUREXPERTISEComponent;
  let fixture: ComponentFixture<OUREXPERTISEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OUREXPERTISEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OUREXPERTISEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
