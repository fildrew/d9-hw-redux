import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "../redux/jobFetching";

const MainSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobFetching.value);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // ----------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchDataAsync(query));
  };

  // --------------------------------------

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/Preferiti");
            }}
          >
            Preferiti
          </button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
