import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { RolService } from '../services/rol.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: [
    './security.component.scss'
  ],
  providers: [RolService]

})

export class SecurityComponent implements OnInit{
  private rols = [];
  private loading = false;

  constructor (private rolService: RolService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.showRols();
  }

  showRols() {
    this.rolService.index().subscribe(
      result => {
        if(!result.data) {
          this.rols = [];
          this.loading = false;
        } else {
          result.data.forEach(element => {
            this.rols.push(element);
          });
          this.loading = false;
        }
      }, 
      error => {
        let errorMessage = <any>error;
        let userMessage = JSON.parse(errorMessage._body);
        this.toastr.error(`${userMessage.meta.userMessage}`, '¡Error!');
        setTimeout(() => {
          this.toastr.error(`${userMessage.meta.devMessage}`, '¡Error!');
        }, 500);
        this.loading = false;
      }
    );
  }

}
