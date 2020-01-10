import React from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';

import './SingleAddress.scss';

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
              <CardText>{streetAddress}</CardText>
              <CardText>{aptOrHouseNum}</CardText>
              <CardText>{city}, {state} {zipCode}</CardText>
              <Button className="selectAddressButton">Select Address</Button>
            </CardBody>
          </Card>
        );
    }
}

export default SingleAddress;