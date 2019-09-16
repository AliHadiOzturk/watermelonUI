import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'w-side-menu',
  template: `
  <div class="watermelon-menu">
      <ul w-side-submenu  [item]="model" root="true" [iconClass]="iconClass" [sublingIcon]="sublingIcon" parentActive="true" visible="true"></ul>
  </div>
  `,
  styleUrls: ['side-menu.component.scss']

})
export class SideMenuComponent {
  @Input() model: any;
  @Input() reset: boolean;
  @Input() root: boolean;
  @Input() iconClass: string;
  @Input() sublingIcon: string;
}


@Component({
  selector: '[w-side-submenu]',
  template: `
        <ng-template ngFor let-item [ngForOf]="(root? item:item.items)" let-i="index">
          <li [ngClass]="{'menu-item-active':isActive(i)}" *ngIf="item.visible===false ? false : true">
            <a [href]="item.url ||'#'" (click)="itemClick($event,item,i)" *ngIf="!item.routerLink" class="menu-item-link">  
              <i *ngIf="item.icon" [attr.class]="iconClass">{{item.icon}}</i>
              <span>{{item.label}}</span>
              <i *ngIf="item.items" [attr.class]="iconClass">{{sublingIcon}}</i>
            </a>
            <a (click)="itemClick($event,item,i)" *ngIf="item.routerLink" class="menu-item-link" [routerLink]="item.routerLink" routerLinkActive="menu-item-link-active">  
              <i *ngIf="item.icon" [attr.class]="iconClass">{{item.icon}}</i>
              <span>{{item.label}}</span>
              <i *ngIf="item.items" [attr.class]="iconClass">{{sublingIcon}}</i>
            </a>
            <ul w-side-submenu *ngIf="item.items" [visible]="isActive(i)" [parentActive]="isActive(i)" [item]="item" [iconClass]="iconClass" [sublingIcon]="sublingIcon"
            [@children]="root ? isActive(i) ?
                      'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
          </li>
        </ng-template>  
  `,
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('children', [
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      state('visible', style({
        height: '*',
        'z-index': 100
      })),
      state('hidden', style({
        height: '0px',
        'z-index': '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('0.5s cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('0.5s cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SideSubMenuComponent implements OnInit {
  @Input() item: any;
  @Input() root: boolean;
  @Input() iconClass: string;
  @Input() sublingIcon: string;
  @Input() visible: boolean;

  _parentActive: boolean;

  activeIndex: number;

  constructor() {

  }

  ngOnInit() {
  }

  hasPermission(data) {
    return true;
  }

  itemClick(event, item, index) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  isActive(index) {
    return this.activeIndex === index;
  }





  @Input() get parentActive(): boolean {
    return this._parentActive;
  }

  set parentActive(val: boolean) {
    this._parentActive = val;

    if (!this._parentActive) {
      this.activeIndex = null;
    }
  }

}
