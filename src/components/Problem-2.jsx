import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalA from "./ModalA";

const Problem2 = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [modalType, setModalType] = useState("");
  const [isEven, setIsEven] = useState(false);

  // Event Handlers

  const handleModalA = () => {
    setIsEven(false);
    setModalShow(true);
    setModalType("Modal A");
    // Call the API
    const getData = async () => {
      const res = await fetch(
        "https://contact.mediusware.com/api/contacts/?format=json"
      );
      const data = await res.json();
      setModalInfo(data.results);
    };
    getData();
    // Set data to setModalInfo state
    // send the state to modal A
  };

  const handleModalB = () => {
    setIsEven(false);
    setModalShow(true);
    setModalType("Modal B");
    // Call the API
    const getData = async () => {
      const res = await fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/"
      );
      const data = await res.json();
      setModalInfo(data.results);
    };
    getData();
    // Set data to setModalInfo state
    // send the state to modal A
  };

  const handleNumberSearch = (e) => {
    const inputNumber = e.target.value;
  };

  // Filter only even contacts
  useEffect(() => {
    if (isEven) {
      const filterEvenContactId = modalInfo?.filter((c) => c.id % 2 === 0);
      setModalInfo(filterEvenContactId);
    }
  }, [isEven]);

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
          <Link to="/problem-2/uscontacts">
            <Button
              type="button"
              variant="outline-warning"
              onClick={handleModalB}
            >
              US Contacts
            </Button>
          </Link>
        </div>
      </div>

      <ModalA
        info={modalInfo}
        type={modalType}
        show={modalShow}
        seteven={setIsEven}
        handleModalA={handleModalA}
        handleModalB={handleModalB}
        handleNumberSearch={handleNumberSearch}
        even={isEven}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Problem2;
