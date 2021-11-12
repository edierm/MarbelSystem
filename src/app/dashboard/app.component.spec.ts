import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describ('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  its('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  its(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  its('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
function describ(arg0: string, arg1: () => void) {
  throw new Error('Function not implemented.');
}

function beforeEach(arg0: (done: any) => any) {
  throw new Error('Function not implemented.');
}

function expect(app: any) {
  throw new Error('Function not implemented.');
}

function its(arg0: string, arg1: (done: any) => any) {
  throw new Error('Function not implemented.');
}

