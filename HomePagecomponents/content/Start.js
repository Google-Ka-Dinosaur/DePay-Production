import Carousel from 'react-bootstrap/Carousel';
import classes from './Start.module.css';

const Team = props =>{
    return(
        <Carousel className={classes.member}>
      <Carousel.Item>
        <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
        src="https://i.ibb.co/LZMHRZP/istockphoto-1145632379-170667a.jpg" 
        />
        <div>
          <h4>Total Transaparency and Fairness</h4>
          <p>We provide services where the absolute control of transaction
              lies with you!
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://i.ibb.co/7SGKhX1/istockphoto-1278703639-170667a.jpg"
        />

        <div>
          <h4>How to Set-Up?</h4>
          <p>Starting with DePay is super simple with easy to understand features and services.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://i.ibb.co/ZJsYG15/technical-support-center-customer-service-internet-business-technology-concept-technical-support-cen.jpg" 
        />

        <div>
          <h4>Happy to Help !</h4>
          <p>
           E-mail your question, chat with us or connect with ius on various social media apps if you face any issue.
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://i.ibb.co/ZM8ML2Y/photo-1579621970795-87facc2f976d.jpg" 
        />

        <div>
          <h4>What it costs?</h4>
          <p>It's absolutely a free service where our only mission is to provide safe transaction services to customers.</p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Team;