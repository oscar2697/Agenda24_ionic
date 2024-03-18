import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string = ''

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService
    ) { 
    this.acceso.getSession('persona').then((res:any) => {
      this.usuario = res
    })
  }

  ngOnInit() {
    
  }

  irContactos() {
    this.navCtrl.navigateRoot(['contactos'])
  }

  irPerfil() {
    this.navCtrl.navigateRoot(['perfil'])
  }
}
