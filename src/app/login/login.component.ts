import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivateGuard } from '../ActivateGuard';
import { ActivateUser } from '../ActivateUser';
@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	model: any = {};
	

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private ag : ActivateGuard,
		private au : ActivateUser
) { }

	ngOnInit() {
	}

	login() {
		if(this.model.username=="administrator" && this.model.password=="administrator")
			{
			this.ag.setCanActivate(true);
			this.router.navigate(['/admin']);
		} else if (this.model.username == "noel" && this.model.password == "noel") {
			this.au.setCanActivate(true,this.model.username);
			this.router.navigate(['/user']);
			}
		else { alert('Invalid Username'); }
	}
}
