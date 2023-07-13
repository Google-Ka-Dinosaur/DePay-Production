import React from 'react';
import classes from './footer.module.css'
import Icons from './icons';

const Footer = props =>{
    return(
    <footer className={`page-footer font-small teal pt-4 ${classes.ftr}`}>


  <div className="container-fluid text-center text-md-left">

    <div className="row justify-content-centre">

        <h5 className="text-uppercase font-weight-bold">Terms & Conditions</h5>
        <div className="col-md-6">
          You agree to be solely responsible for the contents of your transmissions through the Services. 
          You agree not to use the Services for illegal purposes or for the transmission of material that
          is unlawful.
           </div>

        <div className="col-md-6">
        The use shall not be harmful to children, obscene or is otherwise objectionable, offends religious 
        sentiments or that which infringes or may infringe intellectual property or other rights of another.
      </div>

    </div>
</div>
<Icons></Icons>


  <div className="footer-copyright text-center py-3">Made by The Code Cartel
  </div>

</footer>

    )
}

export default Footer;
