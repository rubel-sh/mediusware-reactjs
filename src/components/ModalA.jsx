import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalA = (props) => {
  const { info, type, even, seteven, handleModalA, handleModalB } = props;

  const handleCheck = (e) => {
    seteven(!even);
  };

  console.log(info);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === "Modal A" ? (
          <h4>Contacts of all countries</h4>
        ) : (
          <h4>Contacts of US country</h4>
        )}

        {/* Disaply Modal Buttons */}

        <div className="py-3">
          <Button
            style={{
              border: "2px solid #46139f",
              backgroundColor: "white",
              color: "#46139f",
              marginRight: "15px",
            }}
            onClick={handleModalA}
          >
            All Contacts
          </Button>
          <Button
            style={{
              border: "2px solid #ff7f50",
              backgroundColor: "white",
              color: "#ff7f50",
            }}
            onClick={handleModalB}
          >
            US Contacts
          </Button>
        </div>

        {/* Display Contacts */}
        <div className="row row-cols-1">
          {info?.map((inf) => {
            const { country, phone, id } = inf;
            return (
              <div
                key={id}
                className="btn btn-outline-primary d-flex justify-content-between align-items-center mb-1"
              >
                <span>{id}</span>
                <p>{country.name}</p>
                <p>{phone}</p>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Check
            label="Show Contacts with even ID only"
            name="group1"
            type="checkbox"
            checked={even}
            onChange={handleCheck}
            className="float-left me-5"
            id="inline-checkbox-1"
          />
        </Form>
        <Link to="/problem-2">
          <Button
            onClick={props.onHide}
            style={{
              border: "1px solid #46139f",
              backgroundColor: "white",
              color: "#46139f",
            }}
          >
            Close
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
