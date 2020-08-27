import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faStarHalf} from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    
    return (
        <div className="items text-center">
            <h3>{props.item}</h3>
            <h2>Price: {props.price}$</h2>
            <p style={{color:'yellow'}}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </p>
            <Button className="btn btn-info" onClick={() => props.addEvent(props.pdt)} >Enroll Now</Button>
        </div>
    );
};

export default Course;