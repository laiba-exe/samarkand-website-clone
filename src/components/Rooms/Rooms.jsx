import React, { useState } from 'react';
import './Rooms.css'; // Create a corresponding CSS file for styling
import { room, room1, room2, room3, room4 } from '../../assets';

const rooms = [
  {
    name: 'Master Bedroom',
    description: 'The master bedroom in this heritage hotel exudes an aura of timeless elegance and luxury.',
    image: {room1}
  },
  {
    name: 'The Library',
    description: 'Curl up with a good book in the cozy comfort of the library bedroom.',
    image: {room2}
  },
  {
    name: 'The Garden Room',
    description: 'Wake up to the tranquil beauty of nature with the breathtaking garden view from this bedroom.',
    image: {room3}
  },
  {
    name: 'The Nest',
    description: 'Escape the hustle and bustle of the outside world and unwind in the warm and inviting coziness of this charming bedroom.',
    image: './assets/room4.jpg'
  }
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].image);

  return (
    <div className="rooms-section">
      <div className="rooms-list">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="room-item"
            onMouseOver={() => setSelectedRoom(room.image)}
          >
            <img src={room.image} alt={room.name} />
            <div>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="room-display">
        <img src={selectedRoom} alt="Room Display" id="room-display-image" />
      </div>
    </div>
  );
};

export default Rooms;
