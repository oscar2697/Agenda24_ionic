import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-econtacto',
  templateUrl: './econtacto.page.html',
  styleUrls: ['./econtacto.page.scss'],
})
export class EcontactoPage implements OnInit {
  cod_persona: string = ''
  txt_nombre: string = ''
  txt_apellido: string = ''
  txt_telefono: string = ''
  txt_correo: string = ''
  cod_contacto: string = '' 

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService
  ) { 
    this.acceso.getSession('cod_contacto').then((res:any) => {
      this.cod_contacto = res
      this.consultarDato(this.cod_contacto)
    })
  }

  ngOnInit() {}

  consultarDato(codigo: string) {
    let datos = {
      accion: 'dato_contacto',
      cod_contacto: codigo
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado == true) {
        this.txt_nombre = res.contacto[0].nombre
        this.txt_apellido = res.contacto[0].apellido
        this.txt_telefono = res.contacto[0].telefono
        this.txt_correo = res.contacto[0].correo
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }

  Eliminar() {
    let datos = {
      accion: 'e_contacto',
      cod_contacto: this.cod_contacto,
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado == true) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.navigateRoot('/contactos')
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }
}
