import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetEntradasComponent } from './det-entradas.component';

describe('DetEntradasComponent', () => {
  let component: DetEntradasComponent;
  let fixture: ComponentFixture<DetEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetEntradasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
