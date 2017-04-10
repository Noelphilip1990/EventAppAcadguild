import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export  class ActivateGuard implements CanActivate {
	public can: boolean=false;
	constructor(private router:Router){}
canActivate()
{
	console.log('ActivateGuard#canActivate called, can: ', this.can);
	if(!this.can)
	{
		
		this.router.navigate(['']);
		return false;
	}
	return true;
}
	setCanActivate(can) {
		this.can = can;
}
}