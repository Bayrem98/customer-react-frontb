import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Home() {
  return (
    <div>
      <Card>
        <img src="/img/voitures-les-plus-cheres-du-monde-.jpg" />
        <CardBody>
          <CardTitle tag="h2">
            -The most expensive car models in the world-
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
export default Home;
