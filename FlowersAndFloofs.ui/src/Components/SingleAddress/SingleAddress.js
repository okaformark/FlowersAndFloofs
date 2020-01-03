import React from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';

class SingleAddress extends React.Component {
    render(){
        const { streetAddress } = this.props;
        const { aptOrHouseNum } = this.props;
        const { city } = this.props;
        const { state } = this.props;
        const { zipCode } = this.props;
        const { id } = this.props;

        return (
            <Card>
            <CardBody id={id}>
              <CardText>Street Address: {streetAddress}</CardText>
              <CardText>Apt. or House Number: {aptOrHouseNum}</CardText>
              <CardText>City: {city}</CardText>
              <CardText>State: {state}</CardText>
              <CardText>ZIP code: {zipCode}</CardText>
              <Button>Select Address</Button>
            </CardBody>
          </Card>
        );
    }
}

export default SingleAddress;