import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './PaymtCard.module.css';

function PaymtCard(props) {
  return (
    <Card className={`mt-1 ${classes.pcards}`}>
      <Card.Img variant="top" className={classes.logo} src="https://i.ibb.co/ftkmQvB/De-Pay-removebg-preview.png"  alt="logo" border="0" />
      <Card.Body>
        <div className={classes.details}>
            <Card.Title>ADDRESS:</Card.Title>
            <Card.Text className={classes.head}>
                {props.address}
            </Card.Text>
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>AMOUNT:</Card.Title>
        <Card.Text className={classes.head}>
            {props.amount} WEI
        </Card.Text >
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>AMOUNT USED:</Card.Title>
        <Card.Text className={classes.head}>
            {props.used} WEI
        </Card.Text>
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>AMOUNT TO PAY:</Card.Title>
        <Card.Text className={classes.head}>
            {parseInt(props.used)+parseInt((parseInt(props.rate)*parseInt(props.used))/100)} WEI
        </Card.Text>
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>INTEREST RATE:</Card.Title>
        <Card.Text className={classes.head}>
            {props.rate} %
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaymtCard;