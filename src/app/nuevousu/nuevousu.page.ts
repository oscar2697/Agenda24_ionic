import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-nuevousu',
  templateUrl: './nuevousu.page.html',
  styleUrls: ['./nuevousu.page.scss'],
})
export class NuevousuPage implements OnInit {
  cod_persona: string = ''
  nombre: string = ''
  apellido: string = ''
  cedula: string = ''
  clave: string = ''
  correo: string = ''
  fecha_nacimiento: string = ''

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService
  ) { 
      this.acceso.getSession('cod_persona').then((res: any) => {
        this.cod_persona = res
  })
  }

  ngOnInit() {}

  nuevoUsu() {
    let datos = {
      accion: 'nuevo_usuario',
      cod_persona: this.cod_persona,
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      clave: this.clave,
      correo: this.correo,
      fecha_nacimiento: this.fecha_nacimiento
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.back()
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }
}
