import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron} from 'reactstrap';

const Kolkata = (props) => {
    const place = props.index.map((i) => {
        return(
          <div className='col-sm-12 col-md-3'>
            <Card key={i}>
                <CardImg top height="120px" src={`images/k${i}.jpg`} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
          </div>
        )
    });
    
  return (
    <div>
        <Jumbotron>
            <div className="container">
            <h1>Welcome to Kolkata Tour</h1>
            <p>These are famous places of Kolkata</p>
            </div>
        </Jumbotron>
        <div className='container'>
            <div className='row'>
                {place}
            </div>
        </div>
    </div>
  );
};

export default Kolkata;