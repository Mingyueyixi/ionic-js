import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Wocao} from "../../lib/wocao";

// 也可以写在这里
// declare var Base64:{
//   encode: (input: string) => string;
//   decode: (input: string) => string;
//   _utf8_encode: (string: any) => string;
//   _utf8_decode: (utftext: any) => string;
// }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController) {
    let wocao = new Wocao();
    alert(wocao.mean());

    let encodeText = Base64.encode("中国");
    let deCodeText = Base64.decode(encodeText);
    alert("密文："+encodeText+" 解密："+deCodeText);
  }
}
