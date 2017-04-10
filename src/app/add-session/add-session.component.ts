import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/event';
import { Observable } from 'rxjs/Rx';
import { EventListComponentComponent } from '../event-list-component/event-list-component.component';
@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
	
	id: number;
	public title: string;
	public author: string;
	public duration: string;
	public detail: string;
	public rate: any[];
	//public model = new Event('', '', new Date(), '', []);
	constructor(private el: EventListComponentComponent, private es: EventServiceService, private act: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.act.params.subscribe(
			(params) => {
				this.id = params['id'];
			}
		);

	}
	onSubmitsSession(form) {
		//console.log(this.el.list[this.id].id, this.el.list[this.id].name, new Date(this.el.list[this.id].date), this.el.list[this.id].description, [{ title: form.value.title, author: form.value.author, duration: form.value.duration, detail: form.value.detail, rate: [] }]);
		//this.model = new Event(this.el.list[this.id].id, this.el.list[this.id].name, new Date(this.el.list[this.id].date), this.el.list[this.id].description, [{ title: form.value.title, author: form.value.author, duration: form.value.duration, detail: form.value.detail, rate: [] }]);
		console.log(this.el.list[this.id].id);

		//this.es.addSession(this.model, this.el.list[this.id].id).subscribe(
			//data => {},
			//err =>  { console.log("Error in session:" + err) 

		//});
		console.log({ title: form.value.title, author: form.value.author, duration: form.value.duration, detail: form.value.detail });
	}
	close()
	{
		this.router.navigate(['/admin']);
	}
}
