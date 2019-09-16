import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  model: any;
  ngOnInit(): void {
    this.model = [
      { label: 'Anasayfa', icon: 'dashboard', routerLink: ['/'] },
      {
        label: 'Sorun & Destek Bildirimi', icon: 'settings_application', routerLink: ['/novuscommon/issueList'],
      },
      {
        label: 'Yönetim Paneli', icon: 'business', badgeStyleClass: 'teal-badge',
        items: [
          { label: 'Log', icon: 'toc', routerLink: ['/novuscommon/logList'], },
          { label: 'Kullanıcılar', icon: 'input', routerLink: ['/novuscommon/userlist'], },
          { label: 'Kurum Tanımları', icon: 'grid_on', routerLink: ['/novuscommon/organizationList'], },
          { label: 'Personel Listesi', icon: 'content_paste', routerLink: ['/novuscommon/employeeQuery'], },
          {
            label: 'Sorun Bildirimi Yönetimi', icon: 'content_copy', items: [
              { label: 'Sorun Çözümleyici Listesi', icon: 'content_copy', routerLink: ['/novuscommon/listSolver'] }
            ]
          },


          { label: 'Liste & Raporlar', icon: 'menu', routerLink: ['/novuscommon/employeeExport'], },
          { label: 'Gruplar', icon: 'message', routerLink: ['/novuscommon/groupList'], },
          { label: 'Roller', icon: 'insert_chart', routerLink: ['/novuscommon/roleList'], },
          { label: 'İzinler', icon: 'attach_file', routerLink: ['/novuscommon/permissionList'], },
          { label: 'Kullanıcı Başvuruları', icon: 'toys', routerLink: ['/novuscommon/register/list'], },
          { label: 'Olay Tanımları', icon: 'toys', routerLink: ['/novuscommon/eventList'], },
          { label: 'Raporlar', icon: 'toys', routerLink: ['/dashboard'], },
          { label: 'Sistem Parametreleri', icon: 'toys', routerLink: ['/novuscommon/sysparam'], },
        ]
      },
    ]
  }
}
