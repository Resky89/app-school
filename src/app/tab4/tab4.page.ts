import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public allData: any = [];
  public filteredData: any = [];
  public searchText: string = '';
  public segment: string = 'data';

  constructor() {
    this.getData();
  }

  async getData() {
    try {
        const endpoint = this.getEndpoint();
        const res = await axios.post(endpoint);
        this.allData = res.data.result;
        this.filteredData = this.allData;
        console.log(this.allData);
      } catch (err) {
        console.log(err);
      }
  }
  private getEndpoint(): string {
    return this.segment === 'data'
      ? 'https://praktikum-cpanel-unbin.com/api_reskypr/api_uas/get_data.php'
      : 'https://praktikum-cpanel-unbin.com/api_reskypr/api_uas/get_fee_data.php';
  }
  search() {
    if (this.searchText.trim() === '') {
      this.filteredData = this.allData;
    } else {
      this.filteredData = this.allData.filter(
        (data: any) =>
          data.kd_reg.toLowerCase().includes(this.searchText.toLowerCase()) ||
          data.nama.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }


  segmentBerubah() {
    this.getData();
  }

  getTotalFee(): number {
    return this.filteredData.reduce((total:any, data:any) => total + parseFloat(data.fee), 0);
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      event.target.complete();
      this.getData();
    }, 2000);
  }

  ngOnInit() {
  }
}
