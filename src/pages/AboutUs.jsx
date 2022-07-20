import React from 'react';
import aboutImg from '../assets/images/about1.jpg';
import aboutImg2 from '../assets/images/about2.jpg';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import '../styles/about-us.css';
import { IoIosArrowForward } from 'react-icons/io';

const AboutUs = () => {
  return (
    <Helmet title="About us">
      <Container>
        <Row>
          <Col lg="6">
            <div>
              <img src={aboutImg} alt="about-us-img" className="w-100" />
            </div>
          </Col>

          <Col lg="6">
            <div className="we__desc mt-5 ml-5">
              <h3 className="mt-3 text-center">Who are We?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum esse voluptatem voluptatum cumque. Excepturi, aliquid
                architecto debitis vero vel cumque dicta? Odit aliquam iusto at
                veritatis architecto, distinctio labore maxime vitae laboriosam
                fugiat cum. Rem illum exercitationem sed dolores eum labore,
                nulla culpa corporis dignissimos aspernatur explicabo modi
                incidunt quibusdam.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className=" mt-3 ml-5">
              <h3 className="text-center mt-5">Our Missions</h3>
              <ListGroup>
                <ListGroupItem className="missions__desc border-0">
                  <p>
                    <IoIosArrowForward className="missions__list" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium, commodi.
                  </p>{' '}
                  <p>
                    <IoIosArrowForward className="missions__list" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium, commodi.
                  </p>{' '}
                  <p>
                    <IoIosArrowForward className="missions__list" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium, commodi.
                  </p>{' '}
                  <p>
                    <IoIosArrowForward className="missions__list" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium, commodi.
                  </p>{' '}
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="6">
            <div>
              <img src={aboutImg2} alt="about-us-img-2" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default AboutUs;
