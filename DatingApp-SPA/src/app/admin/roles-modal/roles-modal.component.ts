import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {
  // title: string;
  // closeBtnName: string;
  // list: any[] = [];
  @Output() updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];
 
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }

  updateRoles() {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }
}