import { Component } from '@angular/core';
import { LogUpdateService } from './shared/services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I am a PWA';
  
  constructor(private logUpdate: LogUpdateService ) {}
}
