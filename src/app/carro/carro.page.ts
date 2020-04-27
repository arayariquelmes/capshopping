import { Component, OnInit } from '@angular/core';
//Para enviar mensajes
import {ToastController} from '@ionic/angular';
//Para redireccionar (enviar de una página a otra)
import {Router} from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  constructor(private router:Router, private toastCtrl:ToastController) { }
  async pagar(){
    //1.Mostrar un mensaje de exito (Mensaje Toast)
    const toast = await this.toastCtrl.create({
      message: "Pago realizado exitosamente",
      duration: 2000
    });
    await toast.present();
    //2.Una vez mostrado, llevar al home
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
