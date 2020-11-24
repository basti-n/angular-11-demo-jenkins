import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [{ provide: Window, useValue: window }],
})
export class InfoComponent implements OnInit {
  isLoading = false;

  constructor(private readonly window: Window) {}

  ngOnInit(): void {
    // window.addEventListener('unload', function () {});
  }
}
