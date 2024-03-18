import { Component } from '@angular/core';
import { AccesoService } from '../service/acceso.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { RecuperarPage } from '../recuperar/recuperar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txt_clave: string = ''
  txt_usuario: string = ''
  cuentaBloqueada: boolean = false
  mensajeBloqueo: string = ''

  constructor(
    private acceso: AccesoService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
    ) {}

  login() {
    let datos = {
      accion: 'login',
      usuario: this.txt_usuario,
      clave: this.txt_clave,
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado == true){
        this.acceso.createSession('cod_persona', res.persona[0].codigo)
        this.acceso.createSession('persona', res.persona[0].nombre + ' ' + res.persona[0].apellido)
        this.acceso.showToast('Bienvenido')
        this.navCtrl.navigateRoot('/menu')
      }else {
        if (res.mensaje == 'La cuenta está bloqueada') {
          this.acceso.showToast('La cuenta está bloqueada. Por favor, comuníquese con el administrador.');
        } else {
          this.acceso.showToast(res.mensaje)
        }
      }
    })
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    return await modal.present()
  }

  async abrirModalRecuperacion() {
    const modal = await this.modalCtrl.create({
      component: RecuperarPage,
    });
    return await modal.present();
  }
}
