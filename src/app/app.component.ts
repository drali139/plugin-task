import { Component, inject } from '@angular/core';
import { OnesignalService } from './services/onesignal/onesignal.service';
import { Capacitor } from '@capacitor/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // Standalone component
  imports: [IonApp, IonRouterOutlet] // Import required Ionic components
})
export class AppComponent {
private platform = inject(Platform);
  private onesignal = inject(OnesignalService); // Inject OneSignalService

  constructor() {
    // Initialize OneSignal only on non-web platforms
    this.platform.ready().then(() => {
      if(Capacitor.getPlatform() != 'web') this.onesignal.OneSignalInit();
    });
  }
}
