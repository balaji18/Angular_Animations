import { Component, OnInit } from '@angular/core';
import { UserTestingService } from './user-testing.service';

@Component({
  selector: 'app-user-testing',
  templateUrl: './user-testing.component.html',
  styleUrls: ['./user-testing.component.css'],
  providers: [UserTestingService]
})
export class UserTestingComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  constructor(private userTesting: UserTestingService) { }

  ngOnInit() {
    this.user.name = this.userTesting.user.name;
  }

}
