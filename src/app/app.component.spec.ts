import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describ('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  its('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  its(`should have as title 'marbelSystem'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('marbelSystem');
  });

  its('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('marbelSystem app is running!');
  });
});
function describ(arg0: string, arg1: () => void) {
  throw new Error('Function not implemented.');
}

function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function its(arg0: string, arg1: () => void) {
  throw new Error('Function not implemented.');
}

function expect(app: AppComponent) {
  throw new Error('Function not implemented.');
}

