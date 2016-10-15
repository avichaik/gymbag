
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject(Router)
export class Login {
	router;

	constructor(Router){
		this.router = Router;

	}
	save() {
		this.router.navigateToRoute('welcome');
		alert();
	}
}
