import React from "react";
import classes from "./content.module.css";
import Features from "./features";
import Team from "./team";
import Start from "./Start";
const Content = (props) => {
  return (
    <div className={`container-fluid ${classes.contents}`}>
      <h1>OUR FEATURES</h1>
      <Features></Features>
      <h1 className={classes.marg}>OUR MISSION</h1>
        <div className={`container-fluid ${classes.mission}`}>
        <div className="row">
        <div className="col-md-6 m-auto">
        To create a safe and secure ecosystem that enables anybody to make or receive payments, 
        bringing convenience and trust through continuous innovation leveraging technology.
        In an era where many innocents lose their money to clever hackers, we want to ensure no
        such case of fradulent arise. 
        </div>
        <div className={`col-md-6 ml-8`}>
        <img src="https://i.ibb.co/WB8K07x/istockphoto-1256476283-170667a-removebg-preview.png" />
        </div>
        <div className={`col-md-6 ml-8 ${classes.spimg}`}>
        <img src="https://i.ibb.co/8ggYMPC/digital-payments-removebg-preview.png" />
        </div>
        <div className="col-md-6 m-auto">
        Take care of you and yours at home, and we can take care of you online. Stay agile, ahead of trends,
        free of deceit and help safeguard against economic uncertainty with modular solutions
        that are easy to operationalise.
        </div>
        </div>
      </div>
      <h1 className={classes.marg}>How to start?</h1>
      <Start></Start>
      <h2>ABOUT US</h2>
      <div className={`container-fluid ${classes.about}`}>
      <div className="row">
       <div className="col-md-6 m-auto">
        DePay is an innovative and user-friendly transaction site build using block-chain and furnished 
        using various tricks of web-development. The main focus of the site is to allow customers to carry
        out safe and secure transactions without fear of fraudulent. We provide fair records of all transactions 
        and also give the users sole control over the process.DePay comes with a variety of features designed by yound minds who aim to contribute to the society 
        using the poweful technology. We are a team of aspiring software engineers who want to build projects with mission.
        We've tried to provide a solution via this project and aim to build more such projects in future. 
        </div>
        <div className="col-md-6 ml-5">
        <img src="https://i.ibb.co/sWYRRd0/333-3337529-image-description-vision-and-mission-logo-png-removebg-preview.png"/>
        </div>
      </div>
      </div>
      <h2>PRIVACY POLICY</h2>
      <div className={`container-fluid ${classes.privacy}`}>
      <div className="row">
      <div className="col-md-6 ml-5">
      <img src="https://i.ibb.co/R4qJXCF/Privacy-vs-Security-blog-removebg-preview.png" />
        </div> 
        <div className="col-md-6 m-auto">
        We only collect the information that we actually need. We use your information to provide the services you've requested,
        create and maintain your accounts, and keep an eye out for unauthorized activity on your accounts.We're required to have
        a legal basis for collecting and processing your information. In most cases, we either have your consent or need the information
        to provide the service you've requested from us. 
        </div> 
      </div>
      </div>
      <h2>OUR TEAM</h2>
      <Team></Team>
    </div>
  );
};

export default Content;