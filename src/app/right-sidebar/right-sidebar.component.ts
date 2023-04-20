import { Component, Input, Output, ViewChild, ViewChildren, QueryList, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { FormControl } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { debounceTime, tap } from 'rxjs';
interface MenuNode {
  id: number;
  name: string;
  parentId?: number;
  children: MenuNode[];
}

const nested = (data: any[], pid = undefined) => {
  return data.reduce((r, e) => {
    if (e.parentId == pid) {
      const obj = { ...e }
      const children = nested(data, e.id);
      if (children.length) obj.children = children;
      r.push(obj)
    }
    return r;
  }, [])
}

let data = [
  { id: 1, name: 'تحقيقات موظفي الهيئة', parentId: null },
  { id: 11, name: 'التحقيق الأول', parentId: 1 },
  { id: 12, name: 'التحقيق الثاني', parentId: 1 },
  { id: 13, name: 'التحقيق الثالث', parentId: 1 },
  { id: 2, name: 'تحقيقات المخلصين الجمركيين', parentId: null },
  { id: 21, name: 'المجموعة الفرعية الأولى', parentId: 2 },
  { id: 211, name: 'التحقيق الرابع ', parentId: 21 },
  { id: 212, name: 'التحقيق الخامس', parentId: 21 },
  { id: 22, name: 'المجموعة الفرعية الثانية', parentId: 2 },
  { id: 221, name: 'التحقيق السادس', parentId: 22 },
  { id: 222, name: 'التحقيق الخاص', parentId: 22 }
];
export const TREE_DATA = nested(data);

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  path: MenuNode[] = [];
  searchControl = new FormControl('', { nonNullable: true });
  textToFind: string;
  @ViewChild('sidenavMain') sidenavMain!: ElementRef;
  @ViewChild('logoImg') logoImg!: ElementRef;
  @ViewChild('navItemTitleA') navItemTitleA!: ElementRef;
  @ViewChild('navItemTitleC') navItemTitleC!: ElementRef;

  @ViewChildren('navItemTitleB') navItemTitleB!: QueryList<ElementRef>;

  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  constructor() {
    this.textToFind = '';
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: MenuNode) => !!node?.children && node?.children.length > 0;
  isFirstLevel = (node: MenuNode) => !node.parentId;

  toggleSidenav(searchFocus: boolean = false) {
    this.open = !this.open;
    if (searchFocus) {
      setTimeout(() => {
        this.navItemTitleA.nativeElement.focus();
      });
    }
    this.openChange.emit(this.open)
    if (this.open) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');

      this.sidenavMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.navItemTitleA.nativeElement.removeAttribute('style');
      this.navItemTitleB.forEach((el) => el.nativeElement.removeAttribute('style'));
      this.navItemTitleC.nativeElement.removeAttribute('style');
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');

      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.navItemTitleA.nativeElement.style.display = 'none';
      this.navItemTitleB.forEach((el) => el.nativeElement.style.display = 'none');
      this.navItemTitleC.nativeElement.style.display = 'none';
    }
  }

  

  ngOnInit(): void {
    console.log("nessted", TREE_DATA)
  }

}
