import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-overlay-content',
  templateUrl: './overlay-content.component.html',
  styleUrls: ['./overlay-content.component.css'],
})
export class OverlayContentComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<OverlayContentComponent>,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required),
      locality: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      landmark: new FormControl(null),
      alternetNo: new FormControl(null),
    });
  }

  onSubmit() {

    this.dialogRef.close();

    console.log(this.addressForm.value);

    this.addressForm.reset();
  }
}
