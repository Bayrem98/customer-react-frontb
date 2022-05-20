import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Maserati() {
  return (
    <div>
      <Card>
        <img src="/img/Maserati-car-.avif" />
        <CardBody>
          <CardTitle tag="h2">-Maserati Car-</CardTitle>
          <CardText>
            *This Italian car manufacturer specializes in cars luxury, sports
            and shopping. The brand was founded by the brothers Maserati in
            1914. Its logo is a trident which is inspired by the Fountain of
            Neptune in the city of Bologna. Many times redeemed then resold, in
            particular by Citroën in 1968, Maserati will make a cooperation with
            Chrysler before being definitively acquired by Fiat. In order to be
            able to enjoy the quality of sports cars Italian, you will still
            have to pay nearly 100,000 euros.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Maserati;
