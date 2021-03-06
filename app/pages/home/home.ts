import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FestivalInfoPage} from "../festivalInfo/festivalInfo";
import {CameraPage} from "../camera/camera";
import {ArtistsPage} from "../artists/artists";
import {ArtistPage} from "../artist/artist";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }

  openFestivalInfo(festivalInfo) {
    this.navController.push(FestivalInfoPage, {
      festivalInfo: festivalInfo
    })
  }

  openCamera(camera) {
    this.navController.push(CameraPage, {
      camera: camera
    })
  }

}
