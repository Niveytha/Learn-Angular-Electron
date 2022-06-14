import { Component } from '@angular/core';
import { ElectronService } from './components/services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'Keysight Data Simulator';
  private APP_CONFIG = {
    production: false,
    environment: 'LOCAL'
  };

  constructor(
    private electronService: ElectronService,
  ) {
    console.log('APP_CONFIG', this.APP_CONFIG);
    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
      const data: any = {
        data1: 'test',
        data2: 'test2',
      };

      // this.electronService.sendData("hi");
      // this.electronService.getData().subscribe(res=> {
      //   console.log(res, "test");
      // })
      
      // this.electronService.sendData(data);
      // this.electronService.getData().subscribe((res) => {
      //   console.log(res);
      // });
    } else {
      // this.electronService.sendData("hi");
      // this.electronService.getData().subscribe(res=> {
      //   console.log(res, "test");
      // })
      console.log('Run in browser');
    }
  }
}
