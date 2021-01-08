import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { faAppleAlt, faPepperHot, faCarrot, faLemon, faSeedling } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileJson: string = null;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(profile => {
      this.profileJson = JSON.stringify(profile, null, 2);
    })
  }

}
