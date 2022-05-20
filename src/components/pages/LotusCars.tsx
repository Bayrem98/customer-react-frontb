import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function LotusCars() {
  return (
    <div>
      <Card>
        <img src="/img/Lotus-car-.avif" />
        <CardBody>
          <CardTitle tag="h2">-Lotus Car-</CardTitle>
          <CardText>
            *Lotus is an English luxury car manufacturer sports and racing. It
            is quite rare to see a Lotus in the street, but when you see one,
            you are sure to notice it! Lotus offers compact sports models, such
            as the famous Lotus Elise or the Lotus Evora. There are also many
            models highly prized by collectors like the Lotus Excel, straight
            out of an 80s sci-fi series that looks like much to the Pontiac
            (K.I.T.T.) of K2000! Its retractable headlights give it an old
            school touch. Lotus Cars is based on the former RAF air base, Hethel
            located in Northfolk. We have already taken passengers to visit
            Lotus Cars !
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default LotusCars;
