import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  npm: string = '';
  password: string = '';

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  login() {
    if (this.npm.trim() === '' || this.password.trim() === '') {
      this.presentToast('NPM and password are required.');
      return;
    }else
    this.router.navigate(['/tabs/tab1']);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
