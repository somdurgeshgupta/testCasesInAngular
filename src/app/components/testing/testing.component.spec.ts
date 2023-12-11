import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('component name should be', ()=>{
    expect(component.componentName).toBe("adData");
  })
  it('component name should be adData', ()=>{
    expect(component.componentName).toBe("adData");
  })
  it('component name should be provider', ()=>{
    expect(component.componentName).toBe("adData");
  })
  it('component  user check', ()=>{
    const collection = fixture.nativeElement
    expect(collection.querySelector('.user_component').textContent).toContain("user");
  })
  it('check component function', ()=>{
    expect(component.sum(20,30)).toBe(50);
  })
});
