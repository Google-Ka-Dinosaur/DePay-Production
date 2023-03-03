import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import classes from './UserCard.module.css'

const UserCard= (props) =>{
  return (
    <>
      <MDBContainer className='mt-1'>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className={classes.cardss} style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className={`text-center text-white`}
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://i.ibb.co/ysVwDXh/ethereum-logo-removebg-preview.png"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Account Address</MDBTypography>
                  <MDBCardText className={classes.address}>{props.account}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className={`p-4 ${classes.infos}`}>
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol  size="6" className={`mb-3 ${classes.grid}`}>
                        <MDBTypography tag="h6">Balance</MDBTypography>
                        <MDBCardText className="text-muted">{props.balance}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className={`mb-3 ${classes.grid}`}>
                        <MDBTypography tag="h6">Total Balance I Have Added</MDBTypography>
                        <MDBCardText className="text-muted">{props.totBal}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6"className={`mb-3 ${classes.grid}`}>
                        <MDBTypography tag="h6">Expenditure</MDBTypography>
                        <MDBCardText className="text-muted">{props.totBal-props.balance}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    {/* <MDBTypography tag="h6">Total Balance I have added</MDBTypography>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow> */}

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default UserCard;