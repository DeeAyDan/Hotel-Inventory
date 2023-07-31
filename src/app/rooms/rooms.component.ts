import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  hideRooms = false;
  hotelName = 'Hilton Hotel';
  numberOfRooms = this.rooms.availableRooms;

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathrooms, Kitchen',
        price: 1000,
        photos: 'Placeholder for photo',
        checkinTime: new Date('14-Aug-2023'),
        checkoutTime: new Date('18-Aug-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Standard Room',
        amenities: 'Air Conditioner, TV, Bathrooms',
        price: 500,
        photos: 'Placeholder for photo',
        checkinTime: new Date('16-Aug-2023'),
        checkoutTime: new Date('20-Aug-2023'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathrooms, Kitchen',
        price: 7500,
        photos: 'Placeholder for photo',
        checkinTime: new Date('21-Aug-2023'),
        checkoutTime: new Date('23-Aug-2023'),
        rating: 2.6,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
