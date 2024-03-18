import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  cod_persona: string = ''
  contactos: any = []

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService,
  ) { 
    this.acceso.getSession('cod_persona').then((res: any) => {
      this.cod_persona = res
      this.Icontactos(this.cod_persona)
    })
  }

  ngOnInit() {}

  Icontactos(codigo: string){
    let datos = {
      accion: 'Icontactos',
      cod_persona: codigo,
    }
    this.acceso.postData(datos).subscribe((res:any) => {
      if(res.estado == true) {
        this.contactos = res.datos
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }

  irAgregar() {
    this.navCtrl.navigateRoot(['contacto'])
  }

  irEditar(codigo: string) {
    this.navCtrl.navigateRoot(['mcontacto'])
    this.acceso.createSession('cod_contacto', codigo)
  }

  irEliminar(codigo: string) {
    this.navCtrl.navigateRoot(['econtacto'])
    this.acceso.createSession('cod_contacto', codigo)
  }
}
