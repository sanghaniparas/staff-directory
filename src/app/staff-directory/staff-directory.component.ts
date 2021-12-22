import { Component, OnInit } from '@angular/core';
import { StaffDirectory } from '../shared/model/staffdirectory';
import { SharepointService } from '../shared/services/sharepoint.service';

@Component({
  selector: 'app-staff-directory',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.css']
})
export class StaffDirectoryComponent implements OnInit {

  staff: StaffDirectory[] = [];
  searchedKeyword: string;
  
  constructor(public sharepointService: SharepointService) { }
  ngOnInit(): void {
    this.getstaffdetaile();
  }
  getstaffdetaile(){
    this.sharepointService
    .getStaffData()
    .then((res:StaffDirectory[]) => {
      this.staff = res;
    })
    .catch((err) => JSON.stringify(err));

  }
}

