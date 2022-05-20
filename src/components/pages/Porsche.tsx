import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Porsche() {
  return (
    <div>
      <Card>
        <img src="/img/Picture-porsche.jpeg" className="porsche" />
        <CardBody>
          <CardTitle tag="h2">-Porsche Car-</CardTitle>
          <CardText>
            *How to make a ranking of the most luxurious brands without include
            the world famous Porsche. The German brand offers a range of sporty
            luxury cars. The most popular model is of course the Porsche 911.
            The first generation of this range dates from 1964. Fifty years
            later, the flagship model of the brand still retains the same
            reputation and the same aesthetics. A Used Porsche 911 has now
            become very accessible, even if recent models are difficult to sell
            for less than 100,000 new euros. Porsche therefore remains a brand
            offering cars top-of-the-range sports cars, some of which are
            relatively accessible.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export default Porsche;
