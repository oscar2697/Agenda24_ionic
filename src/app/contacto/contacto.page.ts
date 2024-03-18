import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  cod_persona: string = ''
  txt_nombre: string = ''
  txt_apellido: string = ''
  txt_telefono: string = ''
  txt_telefono2: string = ''
  txt_correo: string = ''
  telefonoExistente: boolean = false
  telefonoExistente2: boolean = false
  mensajeError: string = ''

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService
  ) { 
      this.acceso.getSession('cod_persona').then((res: any) => {
        this.cod_persona = res
    })
  }

  ngOnInit() {}

  guardar(){
    let datos = {
      accion: 'n_Contacto',
      cod_persona: this.cod_persona,
      nombre: this.txt_nombre,
      apellido: this.txt_apellido,
      telefono: this.txt_telefono,
      telefono2: this.txt_telefono2,
      correo: this.txt_correo,
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.back()
      } else {
        if(res.error){
          this.telefonoExistente = true
          this.telefonoExistente2 = true
          this.mensajeError = res.mensaje
        } else {
          this.acceso.showToast(res.mensaje)
        }
      }
    })
  }

  cambiarTelefono() {
    this.telefonoExistente = false
    this.mensajeError = ''
  }
}

