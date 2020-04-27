import { Component, OnInit } from '@angular/core';
import {AlertController,} from '@ionic/angular';
@Component({
  selector: 'app-productos-interior',
  templateUrl: './productos-interior.page.html',
  styleUrls: ['./productos-interior.page.scss'],
})
export class ProductosInteriorPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async agregarCarro(nombre:string, item){
    console.log("hola");
    const alert = await this.alertCtrl.create({
      header:"Producto agregado al carro!",
      message:'Gracias por comprar ' + nombre,
      buttons:['Continuar Comprando']
    });
    await alert.present();
    item.close();
  }

}
