import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotAnnoncesComponent } from './depot-annonces.component';

describe('DepotAnnoncesComponent', () => {
  let component: DepotAnnoncesComponent;
  let fixture: ComponentFixture<DepotAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
