import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureMapsComponent } from './azure-maps.component';

describe('AzureMapsComponent', () => {
  let component: AzureMapsComponent;
  let fixture: ComponentFixture<AzureMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
