import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Bentley() {
  return (
    <div>
      <Card>
        <img src="/img/Bentley-car.avif" />
        <CardBody>
          <CardTitle tag="h2">-Bentley Car-</CardTitle>
          <CardText>
            *Now we are going to get to the heart of the matter... Bentley,
            created in 1919 in Crklewood, North London has become one of the
            most recognized car brands in the world thanks to its numerous
            victories during the 24 Hours of Le Mans in 1924, 1927, 1928, 1929
            and 1930. Prominent models testify to the domination Bentley's
            racing history as the Bentley 4 1/2 litre, the Bentley R Type
            Continental or even the Bentley Turbo R. Today, Bentley offers a
            range of sedans and luxury SUVs. For the accursed sum of 200,000
            euros, you can afford a Bentley Continental. Nevertheless, you could
            no longer have any excuse for not arriving on time for your meet
            when you drive this 5 meter long behemoth and 2500 kg, powered by
            more than 550 horsepower.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Bentley;
