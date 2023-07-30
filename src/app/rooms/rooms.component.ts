import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    avaiableRooms: 10,
    bookedRooms: 5, 
  };

  roomList : RoomList[] = [{
    roomNumber : 1,
    roomType : 'Deluxe Room',
    amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathrooms, Kitchen',
    price : 1000,
    photos : 'Placeholder for photo',
    checkinTime : new Date('14-Aug-2023'),
    checkoutTime : new Date('18-Aug-2023'),
  },
  {
    roomNumber : 2,
    roomType : 'Standard Room',
    amenities : 'Air Conditioner, TV, Bathrooms',
    price : 500,
    photos : 'Placeholder for photo',
    checkinTime : new Date('16-Aug-2023'),
    checkoutTime : new Date('20-Aug-2023'),
  },
  {
    roomNumber : 3,
    roomType : 'Private Suite',
    amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathrooms, Kitchen',
    price : 7500,
    photos : 'Placeholder for photo',
    checkinTime : new Date('21-Aug-2023'),
    checkoutTime : new Date('23-Aug-2023'),
  }

]

  hotelName = "Hilton Hotel";
  numberOfRooms = this.rooms.totalRooms;
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
