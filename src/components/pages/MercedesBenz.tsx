import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function MercedesBenz() {
  return (
    <div>
      <Card>
        <img src="/img/mercedes.avif" />
        <CardBody>
          <CardTitle tag="h2">-Mercedes Benz Car-</CardTitle>
          <CardText>
            *Mercedes-Benz is a German manufacturer of premium automobiles,
            sports and luxury, but also coaches and trucks. Despite a heavy
            history, especially during the Second World War when the brand was
            requisitioned to produce vehicles for the German army by exploiting
            French workers and Soviets, Mercedes is today a brand imposing a
            certain class and elegance. The range of Mercedes-Benz is really
            very diversified, ranging from the utility (Mercedes-Benz Citan) to
            much more sporty and luxurious models like the famous Mercedes-Benz
            SLS AMG and its opening of butterfly doors, which is moreover
            similar to that of our Cirrus SR 22! In short, Mercedes-Benz remains
            a guarantee of quality, with a very varied range in order to reach
            all the users.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default MercedesBenz;
