/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetPostComponent } from './pet-post.component';

describe('PetPostComponent', () => {
  let component: PetPostComponent;
  let fixture: ComponentFixture<PetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
