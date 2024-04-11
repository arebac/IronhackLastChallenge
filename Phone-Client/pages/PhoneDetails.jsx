import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const PhoneDetails = ({ phonesList }) => {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(true);

  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneDetails(true);
  }, [phoneId]);

  const getPhoneDetails = async () => {
    setFetchingDetails(true);

    const phoneToRender = phonesList.find(
      (eachPhone) => eachPhone.id === Number(phoneId)
    );

    setTimeout(() => {
      if (!phoneToRender) {
        navigate("/not-found");
        return;
      }
      setPhoneDetails(phoneToRender);
      setFetchingDetails(false);
    }, 500);
  };

  if (fetchingDetails) {
    return <Spinner animation="border" variant="info" />;
  }

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    imageFileName,
  } = phoneDetails;

  return (
    <>
      <Card style={{ width: "18rem" }} />
      <Card.Img variant="top" scr={`/images/${imageFileName}`} />

      <Card.Body>
        <Card.Title>
          {name} by {manufacturer}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroupItem>Color: {color}</ListGroupItem>
        <ListGroupItem>Price: {price}</ListGroupItem>
        <ListGroupItem>{screen}</ListGroupItem>
        <ListGroupItem>
          Processor: {processor} . RAM: {ram}
        </ListGroupItem>
        <ListGroupItem>Starting from: ${price}</ListGroupItem>
      </ListGroup>

      <Card.Body>
        <Link to="/">Go back</Link>
      </Card.Body>
    </>
  );
};

export default PhoneDetails;
