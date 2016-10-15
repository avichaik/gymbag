
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject(Router)
export class Welcome {
	router;

	constructor(Router){
		this.router = Router;

	}
}
