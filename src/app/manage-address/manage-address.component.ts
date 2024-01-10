import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '../overlay-content/overlay-content.component';
import { MatDialog } from '@angular/material/dialog';
import { AddressFields } from 'src/models/address';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {

  addresses!:AddressFields[]

  constructor(
    private dialog:MatDialog,
    private addressService:AddressService
  ) { }

  ngOnInit(): void {

    this.addressService.getAddress().subscribe(data=>{

      this.addresses = data

      this.addresses = this.addresses.filter(addresse=>addresse.name!=='')
    })
  }

  clickAddress(){

  }

  openDialog(event: MouseEvent): void {
    const dialogRef = this.dialog.open(OverlayContentComponent, {
      position: {
        top: `${event.clientY}px`,
        left: `${event.clientX}px`,
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
