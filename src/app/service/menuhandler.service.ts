import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TreeNode } from 'primeng/api/treenode';


@Injectable({
  providedIn: 'root'
})
export class MenuhandlerService {

  constructor(
    private http: HttpClient,
    private router: Router 
    ) { }

    getFiles() {
      return this.http.get('./assets/mock/tree-menu.json');
                  // .toPromise()
                  // .then(res => {
                  //   console.log(JSON.stringify(res));
                  // });
    }

    active($event: any) {
      this.clearClass(".tab-menu-view","active-tab");
      this.addClass("[for="+$event.item.label+"]","active-tab");
    }

    activeDiv($event: any) {
      this.clearClass(".div-toggel-view","active-tab");
      this.addClass("[for="+$event.item.label+"]","active-tab");
    }

    clearClass(queryClassName :any, removeClassName :any) {
      window.document.querySelectorAll(queryClassName).forEach((e,i)=>{
        e.classList.remove(removeClassName);
      });
    }

    addClass(queryClassName :any, removeClassName :any) {
      window.document.querySelectorAll(queryClassName).forEach((e,i)=>{
        e.classList.add(removeClassName);
      });
    }

}
