import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Lamborghini() {
  return (
    <div>
      <Card>
        <img src="/img/lamborghini.avif" />
        <CardBody>
          <CardTitle tag="h2">-Lamborghini Car-</CardTitle>
          <CardText>
            *Have you heard a thunderstorm when the sky is clear? Don't you ask
            more questions, it's probably a Lamborghini Aventador at the Street
            corner ! Lamborghini was founded in 1963 by Ferruccio Lamborghini.
            First specialized in the construction of tractors in post-war Italy,
            Ferrucio Lamborghini will do fortune in the space of 10 years. The
            Lamborghini Group will devote itself then only to the construction
            of sporty luxury cars from prestige. It was in 1998 that the
            Volkswagen group bought Lamborghini. Despite an absence from the
            competitive scene, the models 350 GT and Huracan will have managed
            to rise alongside the exceptional cars. For 180,000 euros you will
            have the possibility to go to work in a Lamborghini Huracan. For an
            Aventador, you will have to pay no less than 340,000 euros.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Lamborghini;
