import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Ferrari() {
  return (
    <div>
      <Card>
        <img src="/img/Ferari-car.avif" />
        <CardBody>
          <CardTitle tag="h2">-Ferrari Car-</CardTitle>
          <CardText>
            *Ferrari, probably the most popular car brand and recognized
            worldwide, was founded in 1929 by Enzo Ferrari. Enzo was himself a
            racing driver for Alpha Romeo when he decided to launch the Scuderia
            Ferrari. The logo comes from Francesco's mother Baracca, an Italian
            air force pilot who had painted a horse prancing on his cabin. In
            1947 the legendary Ferrari 125 was created S who won the Rome
            automobile grand prix in 1947. While that the Avio Costruzioni 815
            produced in 1940, remained in the shadow of the Second World War,
            still participates today in collector car racing. More recently, it
            is the pilot of Formula 1 Michael Schumacher who made it possible to
            democratize the brand between 1996 and 2006, where he obtained 72
            victories and 5 world titles under the Ferrari banner. You can
            purchase a New Ferrari Portofino for the cursed sum of 200,000
            euros. The prices climbing up to 1.6 million euros for the Ferrari
            Monza.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Ferrari;
