/* * * ./app/comments/model/comment.ts * * */
export class Event {
    constructor(
    	public id: string, 
        public name: string, 
        public date: Date, 
        public time: string,
        public address:string,
        public city:string,
		public pin: number,
		public session: any[]
        ){}
}