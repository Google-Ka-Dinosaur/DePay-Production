import Carousel from 'react-bootstrap/Carousel';
import classes from './team.module.css';

const Team = props =>{
    return(
        <Carousel className={classes.member}>
          <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://i.ibb.co/q96zdpt/r.jpg"  border="0"
          alt="Shruti Swarupa Dhar"
        />

        <div>
          <h4>Shruti Swarupa Dhar</h4>
          <p>
           " It was absolutely a great experience in building the site. I not only learned a variety of amazing stuffs but also
            got an opportunity to work with the best team-mates ever" 
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
           src="https://i.ibb.co/KqvYsMd/nasa1.jpg"
        />
        <div>
          <h4>Naisargika Subudhi</h4>
          <p>"A really unique, challenging and fun experience.Would definitely love to be a part of more such hackathons in the future."</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://i.ibb.co/hg8PJyS/abi.jpg"  border="0"
          alt="Abishek Upadhyay"
        />

        <div>
          <h4>Abishek Upadhyay</h4>
          <p>"Learnt a lot of new things over the course of these three weeks.Really thankful to my teammates Shruti and Naisargika for being a part of this project and making it possible."</p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Team;