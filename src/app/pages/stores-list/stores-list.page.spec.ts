import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoresListPage } from './stores-list.page';

describe('StoresListPage', () => {
  let component: StoresListPage;
  let fixture: ComponentFixture<StoresListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoresListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
