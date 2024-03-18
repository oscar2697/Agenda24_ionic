import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  usuario: string = '';
  nacimiento: string = '';

  constructor(
    private modalCtrl: ModalController,
    private accesoService: AccesoService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  async enviarSolicitudRecuperacion() {
    let datos = {
      accion: 'recuperar_cuenta',
      usuario: this.usuario,
      nacimiento: this.nacimiento
    };
    this.accesoService.postData(datos).subscribe(async (res: any) => {
      if (res.estado) {
        console.log('Solicitud de recuperación de contraseña enviada correctamente');
        this.navCtrl.navigateRoot('/inicio');
        await this.mostrarToast('Cuenta desbloqueada correctamente');
      } else {
        if (res.mensaje === "La cuenta está bloqueada") {
          this.cerrarModal();
        } else {
          console.error('Error al enviar la solicitud de recuperación de contraseña:', res.mensaje);
          await this.mostrarToast('Error al enviar la solicitud de recuperación de contraseña. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    }, async (error) => {
      console.error('Error al enviar la solicitud de recuperación de contraseña:', error);
      await this.mostrarToast('Error al enviar la solicitud de recuperación de contraseña. Por favor, inténtalo de nuevo más tarde.');
    });
    this.cerrar()
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async cerrar() {
    this.modalCtrl.dismiss();
  }
}
