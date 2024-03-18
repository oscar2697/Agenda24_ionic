import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  cod_persona: string = ''
  nuevousu: any = []

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService,
  ) { 
    this.acceso.getSession('cod_persona').then((res: any) => {
      this.cod_persona = res
    })
  }

  ngOnInit() {
  }

  AgregarUsu(){
    this.navCtrl.navigateRoot(['nuevousu'])
  }

}
