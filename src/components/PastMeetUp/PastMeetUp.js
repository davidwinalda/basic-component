import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Button from '../Button/Button';
import './pastmeetup.css';

const PastMeetupCard = ({ data }) => {
    return (
        <>
            {
                data.map((item) => (
                    <Col className="wrapper" key={item.id}>
                        <div className="card bg-light">
                        <div className="card-body text-left">
                            <h6 className="card-title">{item.date}</h6>
                            <hr/>
                            <p>{item.desc}</p>
                            <p><b>{item.attendens}</b> went</p>
                            <Button textButton="View"/>
                        </div>
                        </div>
                    </Col>
                ))
            }
        </>
    );
}

PastMeetupCard.propTypes = {
    date: PropTypes.string,
    event_desc: PropTypes.string,
    attendees: PropTypes.number
}

export default PastMeetupCard;