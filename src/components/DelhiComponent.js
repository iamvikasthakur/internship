import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron} from 'reactstrap';

const Delhi = (props) => {
    const place = props.index.map((i) => {
        return(
          <div className='col-sm-12 col-md-3'>
            <Card>
                <CardImg top height="120px" src={`images/d${i}.jpg`} alt="Card image cap" />
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
            <h1>Welcome to Delhi Tour</h1>
            <p>These are famous places of Delhi</p>
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

export default Delhi;