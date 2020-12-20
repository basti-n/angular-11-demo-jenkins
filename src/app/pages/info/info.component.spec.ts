import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, AppRoutingModule],
        declarations: [InfoComponent, AppComponent],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      fixture = TestBed.createComponent(InfoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
