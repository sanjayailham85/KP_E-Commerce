import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo1.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';
import { RiBuildingLine } from 'react-icons/ri';
import { RiSearchEyeLine } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { TbSend } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer__row justify-content-between mb-3 ">
          <Col lg="2" md="3" sm="4">
            <div className="footer__logo rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto mt-3">
              <img src={logo} alt="footer-logo" className="w-75" />
            </div>

            <p className="logo__desc text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              aliquam, nisi placeat
            </p>

            <ListGroup className="list-unstyled d-flex flex-row justify-content-center">
              <ListGroupItem className="social__links border-0 ps-0">
                <Link to="">
                  <i id="fb" className="ri-facebook-line"></i>
                </Link>
                <Link to="">
                  <i id="ig" className="ri-instagram-line"></i>
                </Link>
                <Link to="">
                  <i id="github" className="ri-github-line"></i>
                </Link>
                <Link to="">
                  <i id="twitter" className="ri-twitter-line"></i>
                </Link>
                <Link to="">
                  <i id="yt" className="ri-youtube-fill"></i>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <div className="cc">
              <h5 className="text-uppercase">
                <RiBuildingLine />
                Our Company
              </h5>
              <ListGroup>
                <ListGroupItem className="customer__care border-0 ps-0 m-0 ">
                  <Link to="">
                    <p>About Us</p>
                  </Link>
                  <Link to="">
                    <p>Contact</p>
                  </Link>
                  <Link to="">
                    <p>Terms and Condition</p>
                  </Link>
                  <Link to="">
                    <p>Privacy Policy</p>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <div className="ts ">
              <h5 className=" text-uppercase">
                <RiSearchEyeLine />
                top searches
              </h5>
              <ListGroup>
                <ListGroupItem className="top__searches border-0 ps-0 m-0">
                  <Link to="">
                    <p>Smartphone1</p>
                  </Link>
                  <Link to="">
                    <p>Smartphone2</p>
                  </Link>
                  <Link to="">
                    <p>Tablet1</p>
                  </Link>
                  <Link to="">
                    <p>Tablet2</p>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <div className="ma ">
              <h5 className=" text-uppercase">
                <MdOutlineAccountCircle />
                my account
              </h5>
              <ListGroup>
                <ListGroupItem className="my__account border-0 ps-0 m-0">
                  <Link to="">
                    <p>Register</p>
                  </Link>
                  <Link to="">
                    <p>Login</p>
                  </Link>
                  <Link to="">
                    <p>My Cart</p>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="4" xs="6">
            <div className="nl ">
              <h5 className="text-uppercase mb-2">
                <TbSend />
                newsletter
              </h5>
              <p className="newsletter__desc ">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer__c d-flex justify-content-center p-3 pb-0 gap-2">
        © 2020 Copyright:
        <p>Website made by -- . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
