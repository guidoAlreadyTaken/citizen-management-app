import { Component, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { NewUser } from '../../models/new-user';
import { LoginPage } from '../login/login';
import { UserRegister } from '../../models/user-register';
import { RegProvider } from '../../providers/reg/reg';



/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {

	newUser: NewUser;
	subscribeError: boolean;

	loginError: boolean;

	@ViewChild(NgForm)
  	registerForm: NgForm;

	constructor(private reg: RegProvider, public navCtrl: NavController, public navParams: NavParams) {
		// craétion du modéle du new user
		this.newUser = new NewUser;
		this.subscribeError = false;
	}

	onSubmit($event) {

	    // Prevent default HTML form behavior.
	    $event.preventDefault();

	    // Do not do anything if the form is invalid.
	    if (this.registerForm.invalid) {
	      return console.log('Pas valide le form');;
	    } 

	    this.subscribeError = false;
	    // set the role of the new user 
	    this.newUser.roles=['citizen'];

	    // Create new user
	    this.reg.createUser(this.newUser).subscribe(user=>{
	    	this.navCtrl.push(LoginPage, {
	    		info : "Utilisateur créé avec succès."
	    	});
	    }, err=> {
	    	this.subscribeError = true;
	    	console.warn(`Impossible to create user : ${err.message}`);
		});
  	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignInPage');
	}

}
