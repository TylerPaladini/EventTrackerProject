import { FishingdayService } from './../fishingday.service';
import { Component, OnInit } from '@angular/core';
import { Fishingday } from '../models/fishingday';

@Component( {
  selector: 'app-fishingdays',
  templateUrl: './fishingdays.component.html',
  styleUrls: ['./fishingdays.component.css']
})
export class FishingdaysComponent implements OnInit {

 // fields
title = 'Fishing Days Tracker';
fishingday: Fishingday[] = [];
newFishingday: Fishingday = new Fishingday();
selected: Fishingday = null;
updateDay: Fishingday = null;

  constructor(private fishingdayService: FishingdayService) { }



  ngOnInit() {
    this.reload();

  }
// reloads list of fishing days
reload() {
  this.fishingdayService.index().subscribe(
    data => {this.fishingday = data; },
    err => {
      console.error('Error retrieving fishing days');
      console.error(err);
    }
  );

}
//  creates new fishing day
newFishingDay() {
  this.fishingdayService.createNewDay(this.newFishingday).subscribe(
    newDay => {
      console.log('New day added' + newDay);
      this.newFishingday = new Fishingday();
      this.reload();
    },
    err => console.error('Observer got an error' + err)
  );
  this.newFishingday = new Fishingday();

}

//  deletes fishing day
delete(id) {
  this.fishingdayService.destroy(id).subscribe(
    deleted => {
      console.log('Deleted day:' + deleted);
      this.reload();
    },
    err => {
      console.error('Error deleting fishing day');
      console.error(err);
    }

  );
}

// updates fishing day
updateFishingday() {
  this.fishingdayService.update(this.updateDay).subscribe(
    updated => {
      console.log('Updated Day:' + updated);
      this.selected = updated;
      this.reload();
      this.updateDay = null;
      },
    err => {
      console.error('Error updating fishing day');
      console.error(err);
      }
    );
  }


// used with the click button to diplay fishing days
displayFishingday(fishingday) {
  this.selected = fishingday;
  }
  // used with the click home button
  displayTable() {
  this.selected = null;
  }

  // copies object into the edit table to be edited
  setEditFishingday() {
    this.updateDay = Object.assign({}, this.selected);
  }
// used when canceling while editing fishing day
  cancel () {
    this.updateDay = null;
  }





}
