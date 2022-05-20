import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Bugatti() {
  return (
    <div>
      <Card>
        <img src="/img/Bugatti.avif" />
        <CardBody>
          <CardTitle tag="h2">-Bugatti Car-</CardTitle>
          <CardText>
            *Bugatti Automobiles is a French automobile manufacturer, founded in
            1909 by the Franco-Italian manufacturer Ettore Bugatti in Molsheim,
            in Alsace. These automobiles were rated for their beauty and their
            performance on the circuit. The Bugattis that made their mark
            history were the Type 30 Grand Prix, the Type 41 Royale, the Type 57
            Atlantique and the Type 55 sports car. After Ettore's death Bugatti
            in 1947, the brand went bankrupt before being put back on the rails
            in 1950 by a wealthy Italian entrepreneur. The brand is today owned
            by the Volkswagen AG group. Want to do turn heads when you ride
            downtown? This car is made for you! However, it will be very
            difficult to find a Bugatti Veyron for less than a million euros.
            About the Chiron, it will cost you 2.5 million euros, but you will
            ensure a unique acceleration in the world with no less than 1500
            horses under the hood.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Bugatti;
