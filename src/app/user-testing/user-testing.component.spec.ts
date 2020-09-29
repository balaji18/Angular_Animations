import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestingComponent } from './user-testing.component';
import { UserTestingService } from './user-testing.service';

// describe('UserTestingComponent', () => {
//   let component: UserTestingComponent;
//   let fixture: ComponentFixture<UserTestingComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserTestingComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserTestingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Create: UserTestingComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserTestingComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserTestingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UserTestingComponent);
    const app = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserTestingService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  xit('should display the user name if user is logged in', () => {
    const fixture = TestBed.createComponent(UserTestingComponent);
    const app = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserTestingService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
});
