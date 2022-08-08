import React from 'react';
import '../styles/contact.css';
import contactImg from '../assets/images/contact.jpg';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <Container>
        <Row className="mt-5">
          <Col lg="6">
            <img
              src={contactImg}
              alt="contact-img"
              className="contactImg w-75"
            />
          </Col>

          <Col lg="6">
            <div>
              <h3>How can We Help?</h3>

              <p>Send Us a message</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Contact;
