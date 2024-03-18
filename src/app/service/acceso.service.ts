import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  server:string ='http://localhost/WsAgenda24Ionic/ws_agenda.php'

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController
  ) {}

  postData(body:any) {
    let head = new HttpHeaders({'Content-Type' : 'application/json, charset: utf8'})
    let options = {
      headers: head
    }
    return this.http.post(this.server, JSON.stringify(body), options)
  }

  async createSession(id:string, valor:string,) {
    await Storage.set({
      key: id,
      value: valor
    })
  }

  async closeSession() {
    await Storage.clear()
  }

  async getSession(id:string) {
    const item = await Storage.get({
      key: id,
    })
    return item.value
  }

  async showToast(mensaje:string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1000,
      position: 'top'
    })
    toast.present()
  }
}
