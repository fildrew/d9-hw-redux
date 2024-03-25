import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavorite } from "../redux/actions";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourites.favourite.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRemoveFromFavorite = (fav) => {
        dispatch(removeFromFavorite(fav));
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                <h1>Favourites</h1>
                <Button onClick={() => navigate("/")}>Home</Button>
                </Col>
                <Col xs={10} className="mx-auto my-3">
                <ListGroup>
                    {favourites.map((fav, i) => (
                    <ListGroupItem key={i}>
                        <StarFill className="mr-2" onClick={() => handleRemoveFromFavorite(fav)} />
                        <Link to={"/" + fav}>{fav}</Link>
                    </ListGroupItem>
                    ))}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Favourites;