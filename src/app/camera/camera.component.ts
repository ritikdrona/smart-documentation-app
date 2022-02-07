import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.sass']
})
export class CameraComponent implements OnInit {

  supported: boolean = 'mediaDevices' in navigator;
  player: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    this.player = document.getElementById('player') as HTMLVideoElement;
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.height = this.player.height / 2;
    this.canvas.width = this.player.width / 2;

    const constraints = {
      video: true,
    };

    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    this.player.srcObject = stream;
  }

  capture() {
    if (this.canvas) {
      this.context.drawImage(this.player, 0, 0, this.canvas.width, this.canvas.height);
      // let tracks = this.player.srcObject.getVideoTracks();
      // tracks.forEach(track => track.stop());


      // player.srcObject.getVideoTracks().forEach(track => track.stop());

    }
  }

}
