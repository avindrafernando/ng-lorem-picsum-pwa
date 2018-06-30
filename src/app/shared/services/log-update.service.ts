import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';


@Injectable()
export class LogUpdateService {
  
  private snackBar;
  
  constructor(updates: SwUpdate, snackBar: MatSnackBar) {
    this.snackBar = snackBar;

    updates.available.subscribe(event => {     
      this.notifyAppUpdate(event);
    });

    updates.activated.subscribe(event => {
      this.notifyAppActivated(event);
    });
  }

  private displayAndReturnSnackBar(message, action, config = {}): MatSnackBarRef<MatSnackBar> {
    return this.snackBar.open(message, action, config);
  }

  private logAppUpdateToConsole(event): void {
    console.log('current version is', event.current);
    console.log('available version is', event.available);
  }

  private logAppActivatedToConsole(event): void {
    console.log('old version was', event.previous);
    console.log('new version is', event.current);
  }

  private handleSnackBarAction(snackBarRef, action): void {
    if (action.toLowerCase() === 'refresh') {
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    }
  }

  private notifyAppUpdate(event): void{
    this.logAppUpdateToConsole(event);

    let snackBarRef = this.displayAndReturnSnackBar(
      'A new version of the app has loaded.',
      'Refresh',
      {
        duration: 10000,
      }
    )

    this.handleSnackBarAction(snackBarRef, 'Refresh');

  }

  private notifyAppActivated(event): void {
    this.logAppActivatedToConsole(event);

    let snackBarRef = this.displayAndReturnSnackBar(
      'A new version of the app has been activated.',
      'Close',
      {
        duration: 10000,
      }
    )
  }
}
