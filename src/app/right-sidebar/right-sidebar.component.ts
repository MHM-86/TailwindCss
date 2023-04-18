import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  @ViewChild('sidenavMain') sidenavMain!: ElementRef;
  @ViewChild('logoImg') logoImg!: ElementRef;
  @ViewChild('navItemTitleA') navItemTitleA!: ElementRef;
  @ViewChild('navItemTitleB') navItemTitleB!: ElementRef;
  @Input() open! : boolean;
  @Output() openChange = new EventEmitter<boolean>();
  toggleSidenav(){
    this.open = !this.open;
    this.openChange.emit(this.open)
    if (this.open) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');
      
      this.sidenavMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.navItemTitleA.nativeElement.removeAttribute('style');
      this.navItemTitleB.nativeElement.removeAttribute('style');
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');

      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.navItemTitleA.nativeElement.style.display = 'none';
      this.navItemTitleB.nativeElement.style.display = 'none';
    }
  }

}
