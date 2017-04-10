import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { OrderByDatePipe } from '../order-by-date.pipe';
import { Router } from '@angular/router';
import { ActivateUser } from '../ActivateUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	public user: string = "";
	
	list: any[] = [];
	constructor(private es: EventServiceService, private router: Router, private au: ActivateUser) 
	{ 
	
	}

  public loadEvents()
  {
    this.es.getEvents()
      .subscribe(
    event => this.list = event, //Bind to view
    err => {
      // Log errors if any
      console.log(err);
    });
  }
	ngOnInit() {
		this.loadEvents();
		this.user = this.au.user;
	}
	
	logout() {
		this.au.setCanActivate(false,"");
		this.router.navigate(['']);
	}
}
