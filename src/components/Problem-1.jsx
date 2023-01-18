import React, { useState, useEffect } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const sortStatus = () => {
    const activeLists = tasks.filter((t) => t.status === "active");
    const completedLists = tasks.filter((t) => t.status === "completed");
    const otherLists = tasks.filter(
      (t) => t.status !== "active" && t.status !== "completed"
    );
    setFilteredTasks([...activeLists, ...completedLists, ...otherLists]);
  };

  const handleClick = (val) => {
    if (val === "all") {
      sortStatus();
    }
    if (val === "active") {
      const activeTasks = tasks.filter((t) => t.status === val);
      setFilteredTasks(activeTasks);
    }
    if (val === "completed") {
      const activeTasks = tasks.filter((t) => t.status === val);
      setFilteredTasks(activeTasks);
    }
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const status = form.status.value;

    setTasks([...tasks, { name, status }]);
    setFilteredTasks([...tasks, { name, status }]);
  };

  useEffect(() => {
    sortStatus();
  }, [tasks]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {filteredTasks?.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
