import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* setPageSettings(arg0: { pageEmpty: boolean; pageBodyWhite: boolean; }) {
    throw new Error('Method not implemented.');
  } */
  pageSettings;

  title = 'Proyecto';
  items: Observable<any[]>;
  renderer: any;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('cat1').valueChanges();
  }

  setPageSettings(settings): void {
  for (const option of settings) {
  this.pageSettings[option] = settings[option];
  if (option === 'pageBodyWhite' && settings[option] === true) {
      this.renderer.addClass(document.body, 'bg-white');
    }
  }
  }

    // set page right collapse
    onToggleSidebarRight(val: boolean): void {
      if (this.pageSettings.pageSidebarRightCollapsed) {
        this.pageSettings.pageSidebarRightCollapsed = false;
      } else {
        this.pageSettings.pageSidebarRightCollapsed = true;
      }
    }

}
