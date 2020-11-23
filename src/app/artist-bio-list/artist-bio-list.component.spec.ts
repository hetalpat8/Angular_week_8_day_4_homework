import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBioListComponent } from './artist-bio-list.component';

describe('ArtistBioListComponent', () => {
  let component: ArtistBioListComponent;
  let fixture: ComponentFixture<ArtistBioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
