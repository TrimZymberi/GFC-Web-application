import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="row">

                <div className="col-md-3 col-sm-6">
                    <h4>Contact us</h4>
                    <ul className="list-unstyled">
                        <li>Gjilan 60000, Kosove</li>
                        <li>Rr.Mulla Idrizi</li> 
                        <li>+383 44 123 456</li>
                        <li>+383 49 123 456</li>
                       
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h4>Social Media</h4>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Google plus</li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                        <h4>Company </h4>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Overview</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} GFC Kosova - All rights reserved
                </p>
            </div>

        </div>
        </div>
    </FooterContainer>
  )
}

export default Footer


const FooterContainer = styled.footer`
.footer-middle{
    background: #D12C35; 
    padding-bottom: 1rem;
    color: lightGrey;
    display:flex;
    text-align:center;
    justify-content:center;
    padding: 50px ;
}

.row{
    display:flex;
    justify-content:center;
    text-align:center;
    width:100%;
}
.footer-bottom{
    padding-top: 1rem;
    color: lightGrey;
    
}

ul li a{
    color: #fff;
    text-decoration:none;
}
ul li a:hover{
    color: #acacac;
}


`;