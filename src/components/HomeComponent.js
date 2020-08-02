import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron, Form
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div >
            <Jumbotron>
                <div className="container">
                <h1>Welcome to Tour and Travel aka T&T</h1>
                <p>Experience the happiness with us..</p>
                </div>
            </Jumbotron>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3'>
                    <Card key='1'>
                        <CardImg top height="120px" src="/images/d1.jpg" alt="delhi" />
                        <CardBody>
                        <CardTitle>Delhi</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Link to='/delhi'>Know More</Link>
                        </CardBody>
                    </Card>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                    <Card key='2'>
                        <CardImg top height="120px" src="/images/m1.jpg" alt="mumbai" />
                        <CardBody>
                        <CardTitle>Mumbai</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Link to='/mumbai'>Know More</Link>
                        </CardBody>
                    </Card>
                    </div><div className='col-sm-12 col-md-3'>
                    <Card key='3'>
                        <CardImg top height="120px" src="/images/k1.jpg" alt="kolkata" />
                        <CardBody>
                        <CardTitle>Kolkata</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Link to='/kolkata'>Know More</Link>
                        </CardBody>
                    </Card>
                    </div><div className='col-sm-12 col-md-3'>
                    <Card key='4'>
                        <CardImg top height="120px" src="/images/b1.jpg" alt="banglore" />
                        <CardBody>
                        <CardTitle>Banglore</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Link to='/banglore'>Know More</Link>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;