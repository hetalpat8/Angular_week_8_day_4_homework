import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBioCardComponent } from './artist-bio-card.component';

describe('ArtistBioCardComponent', () => {
  let component: ArtistBioCardComponent;
  let fixture: ComponentFixture<ArtistBioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
