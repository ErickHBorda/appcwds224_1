import { Component, Injectable } from "@angular/core";
import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
/*import * as PNotifyMobile from '@pnotify/mobile';
import * as PNotifyBootstrap5 from '@pnotify/font-awesome5-fix';

PNotifyMobile; // Initialize the mobile module.
PNotifyBootstrap5; // Initialize the Bootstrap 5 module.*/


@Injectable({
    providedIn: 'root'
})
export class Notify {
    alert(options: any) {
        alert(options);
    }
    
    notice(options: any) {
      notice(options);
    }

    info(options: any) {
      info(options);
    }

    success(options: any) {
      success(options);
    }

    error(options: any) {
      error(options);
    }
}