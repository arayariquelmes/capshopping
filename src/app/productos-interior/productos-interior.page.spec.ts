import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosInteriorPage } from './productos-interior.page';

describe('ProductosInteriorPage', () => {
  let component: ProductosInteriorPage;
  let fixture: ComponentFixture<ProductosInteriorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosInteriorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosInteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
