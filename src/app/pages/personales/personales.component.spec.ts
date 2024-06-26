import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalesComponent } from './personales.component';

describe('PersonalesComponent', () => {
  let component: PersonalesComponent;
  let fixture: ComponentFixture<PersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
