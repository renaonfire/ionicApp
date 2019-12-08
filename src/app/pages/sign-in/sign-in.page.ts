import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string = ''
  password: string =''

  constructor(public afAuth: AngularFireAuth, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    
  }

  async signIn(){
    const { email, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/list']);
    } catch(err) {
      console.dir(err);
      if(err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
        this.showAlert();

      }
    }
  }


  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Log In Failed',
      message: 'Username or Password incorrect, please try again',
      buttons: ['OK']
    });
    alert.present();
}

}
