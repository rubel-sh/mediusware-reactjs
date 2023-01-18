import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalA from "./ModalA";

const Problem2 = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [modalType, setModalType] = useState("");
  // const [modalBInfo, setModalBInfo] = useState([]);

  const handleModalA = () => {
    setModalShow(true);
    setModalType("Modal A");
    // Call the API
    const getData = async () => {
      const res = await fetch(
        "https://contact.mediusware.com/api/contacts/?format=json"
      );
      const data = await res.json();
      setModalInfo(data);
    };
    getData();
    // Set data to setModalInfo state
    // send the state to modal A
  };

  const handleModalB = () => {
    setModalShow(true);
    setModalType("Modal B");
    // Call the API
    const getData = async () => {
      const res = await fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/"
      );
      const data = await res.json();
      setModalInfo(data);
    };
    getData();
    // Set data to setModalInfo state
    // send the state to modal A
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/problem-2/allContacts">
            <Button
              type="button"
              variant="outline-primary"
              onClick={handleModalA}
            >
              All Contacts
            </Button>
          </Link>
          <Button
            type="button"
            variant="outline-warning"
            onClick={handleModalB}
          >
            US Contacts
          </Button>
        </div>
      </div>

      <ModalA
        info={modalInfo}
        type={modalType}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Problem2;
