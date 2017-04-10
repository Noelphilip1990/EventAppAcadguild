import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from '../model/event';
import {Observable} from 'rxjs/Rx';
import {EventListComponentComponent} from '../event-list-component/event-list-component.component';
import { default as swal } from 'sweetalert2';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

	private eventName: string="Hello";
	private date;
	private desc: string="session1";
	id: number;
	olddate: any;
	day: string;
	month: string;
	year: string;
	newdate: string;
	public model = new Event('', '', new Date(), '', '', '', 0, []);
	constructor(private el:EventListComponentComponent, private es: EventServiceService, private act: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.act.params.subscribe(
			(params) => {
				this.id = params['id'];
			}
		);
		this.model = new Event(this.el.list[this.id].id, this.el.list[this.id].name, new Date(this.el.list[this.id].date), this.el.list[this.id].time, this.el.list[this.id].address, this.el.list[this.id].city, this.el.list[this.id].pin, []);
		/**this.olddate = new Date(this.es.eventList[this.id].date);
		var options = {  year: 'numeric', month: 'long', day: 'numeric' }; 
		this.eventName = this.es.eventList[this.id].name;
		this.day= this.olddate.getDate();
		this.month = this.olddate.getMonth()+1;
		this.year = this.olddate.getFullYear();
		this.newdate = this.year + '-0' + this.month + '-' + this.day;
		console.log('newdate:' + this.newdate);
		this.date = this.newdate;
		
  	this.desc=this.es.eventList[this.id].description;**/
  }
		
onSubmitEditEvent(form)
{
	this.es.updateEvent(this.model);
		console.log(form.value,this.id
			);
		swal({
			title: 'Event',
			text: 'Event is Edited!!',
			timer: 2000
		}).then(
			function() { },
			// handling the promise rejection
			function(dismiss) {
				if (dismiss === 'timer') {
					console.log('I was closed by the timer')
				}
			}
			)
		this.el.loadEvents();
		this.router.navigate(['/admin']);
}
close() {
    this.router.navigate(['/admin']);
	this.model = new Event('', '', new Date(), '', '', '', 0, []);
  }
}
