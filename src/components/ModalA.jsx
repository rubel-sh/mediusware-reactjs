import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalA = (props) => {
  const { info, type } = props;

  // contacts

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
          >
            All Contacts
          </Button>
          <Button
            style={{
              border: "2px solid #ff7f50",
              backgroundColor: "white",
              color: "#ff7f50",
            }}
          >
            US Contacts
          </Button>
        </div>

        {/* Display Contacts */}
        <div className="row row-cols-1">
          {info?.results?.map((inf) => {
            const { country, phone, id } = inf;
            return (
              <div class="btn btn-outline-primary d-flex justify-content-between align-items-center mb-1">
                <p>{country.name}</p>
                <p>{phone}</p>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Check
          label="Show Contacts with even ID only"
          name="group1"
          type="checkbox"
          className="float-left me-5"
          id="inline-checkbox-1"
        />

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
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
