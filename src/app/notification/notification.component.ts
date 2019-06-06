import { Component, OnInit } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NotificationService} from '../services/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  readonly VAPID_PUBLIC_KEY = 'BETrJQKr6pVLYdl-tIXq0kn1t9TGzSvlIV26qwbNfW9b7UcTpyIs5wFtHgK0nelyvrPZWG2grkAq4N6cdWGy09k';

  constructor(
    private swPush: SwPush,
    private notificationService: NotificationService) {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    });
  }
}
