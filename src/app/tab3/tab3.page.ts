import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nama: any = "";
  public jk: any = "";
  public no_hp: any = "";
  public email: any = "";
  public asal_sekolah: any = "";
  public prodi: any = "";
  public jenjang: any = "";
  public kelas: any = "";
  public info_kampus: any = "";

  constructor(
    public toastCtrl: ToastController,
  ) {}

  async addData() {
    if (!this.nama || !this.jk || !this.no_hp || !this.email || !this.asal_sekolah || !this.prodi || !this.jenjang || !this.kelas || !this.info_kampus) {
      const toast = await this.toastCtrl.create({
        message: 'Semua data harus diisi',
        duration: 2000
      });
      toast.present();
      return;
    }

    const formData = new FormData();
    formData.append('nama', this.nama);
    formData.append('jk', this.jk);
    formData.append('no_hp', this.no_hp);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('prodi', this.prodi);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info_kampus', this.info_kampus);

    try {
      // const res = await axios.post('http://localhost/api_uas/post_data.php', formData);
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_reskypr/api_uas/post_data.php', formData);
      console.log(res.data);

      if (res.data.error == false) {
        const toast = await this.toastCtrl.create({
          message: 'Data Calon Mahasiswa Berhasil Ditambahkan',
          duration: 2000
        });
        toast.present();

        // Reset input values after successful submission
        this.nama = "";
        this.jk = "";
        this.no_hp = "";
        this.email = "";
        this.asal_sekolah = "";
        this.prodi = "";
        this.jenjang = "";
        this.kelas = "";
        this.info_kampus = "";
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Data Calon Mahasiswa Gagal Ditambahkan',
          duration: 2000
        });
        toast.present();
      }

    } catch (err) {
      console.log(err);
    }
  }
}
