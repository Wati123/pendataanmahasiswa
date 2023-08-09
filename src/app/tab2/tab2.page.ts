import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviders } from 'src/post-providers';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  nik : string = '';
  nama_lengkap : string = '';
  jenis_kelamin : string = '';
  alamat : string = '';
 
  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProviders,
  ) {

  }

  ngOnInit(): void {
    
  }

  async addRegister(){
    if (this.nik== '') {
      const toast = await this.toastController.create({
        message: 'Nik harus diisi',
        duration: 2000
      });
      toast.present();
    } else if (this.nama_lengkap== '') {
      const toast = await this.toastController.create({
        message: 'Nama Lengkap harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.jenis_kelamin== '') {
      const toast = await this.toastController.create({
        message: 'Jenis Kelamin harus di isi',
        duration: 2000
      });  
      toast.present();
    } else if (this.alamat== '') {
      const toast = await this.toastController.create({
        message: 'Alamat harus di isi',
        duration: 2000
      });
      
      toast.present();
    } else {
      let body = {
        nik:this.nik,
        nama_lengkap:this.nama_lengkap,
        jenis_kelamin:this.jenis_kelamin,
        alamat:this.alamat,
      
        aksi: 'add_register',
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data  => {
        
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab3']);
          const toast = await this.toastController.create({
            message: 'Selamat ! Registrasi E-KTP SUKSES.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });
    }
  }
}