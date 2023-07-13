import Carousel from 'react-bootstrap/Carousel';
import classes from './Start.module.css';

const Team = props =>{
    return(
        <Carousel className={classes.member}>
      <Carousel.Item>
        <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
        src="https://i.ibb.co/26gHGkX/pic1.png" 
        />
        <div>
          <h4>How to Install and Use Metamask on Google Chrome?</h4>
          <p>Step 1: Go to Chrome Web Store Extensions Section.
              <br></br>
            Step 2: Search MetaMask.
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
        src="https://i.ibb.co/LgPSX8L/pic2.png" 
        />
        <div>
          <p>
            Step 3: Check the number of downloads to make sure that the legitimate MetaMask is installed
            <br></br>
            Step 4: Click the Add to Chrome button.
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612112910/getstartedmetamask.png"
        />

        <div>
          <p>Step 5: Once installation is complete this page will be displayed. Click on the Get Started button.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612113203/createwalletscreen.png" 
        />

        <div>
          <p>
          Step 6: This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612113420/improvemetamask.png" 
        />

        <div>
          <p> Step 7: Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612113849/createpassword.png" 
        />

        <div>
          <p>Step 8: Create a password for your wallet. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. In that case, go through the Import Wallet button. This is because MetaMask stores the keys in the browser. Agree to Terms of Use.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612114419/phrase.png" 
        />

        <div>
          <p>Step 9: Click on the dark area which says Click here to reveal secret words to get your secret phrase. 
</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612114419/phrase.png" 
        />

        <div>
          <p>
Step 10: Back up your secret phrase. Do not store your secret phrase on your computer. Read everything before proceeding. Next click the Next button.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612115346/confirmphrase.png"
        />

        <div>
          <p>Step 11: Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on 
            the screen. If done correctly the Confirm button should turn blue.
</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612115510/donewallet.png" 
        />

        <div>
          <p>
          Step 12: Click the Confirm button. Please follow the tips mentioned.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612115925/wallet.png"
        />

        <div>
          <p>
          Step 13: One can see the balance and copy the address of the account by clicking on the Account 1 area.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.ppl}>
        <img
          className={`d-block ${classes.image}`}
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210612120413/extension.png"
        />

        <div>
          <p>
          Step 14: One can access MetaMask in the browser by clicking the Foxface icon on the top right.
           If the Foxface icon is not visible, then click on the puzzle piece icon right next to it.</p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Team;
