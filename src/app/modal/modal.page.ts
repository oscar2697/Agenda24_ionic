import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  txt_usuario: string = ''
  cod_persona: string = ''
  txt_clave: string = ''

  constructor(
    private navCtrl: NavController,
    private acceso: AccesoService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  recuperar() {
    let datos = {
      accion: 'contraseña',
      txt_usuario: this.txt_usuario,
      txt_clave: this.txt_clave
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.back()
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
    this.closeModal();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
