import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          href="https://www.facebook.com/profile.php?id=100041190876653"
          variant="primary"
        >
          Visit my Facebook, Inc.
        </Button>
      </Col>
    </Row>
  );
};

export default About;
