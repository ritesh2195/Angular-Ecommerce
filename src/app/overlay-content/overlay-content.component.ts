import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-overlay-content',
  templateUrl: './overlay-content.component.html',
  styleUrls: ['./overlay-content.component.css']
})
export class OverlayContentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OverlayContentComponent>) { }

  ngOnInit(): void {
  }

  goToProfile(): void {
    // Add logic to navigate to My Profile
    this.dialogRef.close();
  }

  goToOrders(): void {
    // Add logic to navigate to Orders
    this.dialogRef.close();
  }

  goToWishlist(): void {
    // Add logic to navigate to Wishlist
    this.dialogRef.close();
  }

}
