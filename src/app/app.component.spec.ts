import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should render router-outlet wrapped with css classes', () => {
    const divElement = compiled.querySelector('div');
    const mustHaveClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ')
    const divClasses = divElement?.classList.value.split(' ')
    // divElement?.classList.forEach(className => {
      //   expect(mustHaveClasses).toContain(className);
      // });
    expect(divElement).not.toBeNull();
    mustHaveClasses.forEach(className => {
      expect(divClasses).toContain(className);
    })
  });

  it("should contain the ' buy me a beer ' link ", () => {
    const anchorTitle = 'Buy me a beer';
    const anchorLink = 'https://www.buymeacoffee.com/scottwindon';
    const anchorElement = compiled.querySelector('a');
    const anchorHref = anchorElement?.getAttribute('href');

    // Anchor element
    expect(anchorElement).not.toBeNull();
    expect(anchorElement?.title).toEqual(anchorTitle);
    // Anchor link
    expect(anchorHref).not.toBeNull();
    expect(anchorHref).toEqual(anchorLink);
  });
});
