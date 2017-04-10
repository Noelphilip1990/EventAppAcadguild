/* * * ./app/comments/model/comment.ts * * */
export class Session {
    constructor(
		public title: string,
		 public author: string,
		  public duration: string,
		   public detail: string,
		    public rate: any[]
        ){}
}