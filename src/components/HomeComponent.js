import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';

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
                    <Card>
                        <CardImg top height="120px" src="/images/d1.jpg" alt="delhi" />
                        <CardBody>
                        <CardTitle>Delhi</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button href='/delhi'>Know More</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                    <Card>
                        <CardImg top height="120px" src="/images/m1.jpg" alt="mumbai" />
                        <CardBody>
                        <CardTitle>Mumbai</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button href='/mumbai'>Know More</Button>
                        </CardBody>
                    </Card>
                    </div><div className='col-sm-12 col-md-3'>
                    <Card>
                        <CardImg top height="120px" src="/images/k1.jpg" alt="kolkata" />
                        <CardBody>
                        <CardTitle>Kolkata</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button href='/kolkata'>Know More</Button>
                        </CardBody>
                    </Card>
                    </div><div className='col-sm-12 col-md-3'>
                    <Card>
                        <CardImg top height="120px" src="/images/b1.jpg" alt="banglore" />
                        <CardBody>
                        <CardTitle>Banglore</CardTitle>
                        <CardSubtitle>Title</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button href='/banglore'>Know More</Button>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;