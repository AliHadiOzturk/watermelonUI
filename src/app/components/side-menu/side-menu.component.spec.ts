import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideSubMenuComponent } from './side-menu.component';


describe('SideMenuComponent', () => {
  let component: SideSubMenuComponent;
  let fixture: ComponentFixture<SideSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
