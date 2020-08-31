import React from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import AvatarImage from '../../assets/avatar.jpg';
import './cardMeetUp.css';

const CardMeetUp = () => {

  const thanksForJoin = () => {
    alert('Terima kasih sudah join meetup');
  }

  return (
    <div>
      <div className="cardJoinUs">
        <div>
          <Avatar src={AvatarImage} />
        </div>
        <div>
          <p>Hacktiv 8 Meetup</p>
          <Button textButton="JOIN US" onClick={thanksForJoin}/>
        </div>
      </div>
    </div>
  );
}

export default CardMeetUp;