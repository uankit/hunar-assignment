import React, { useState } from "react";
import { userData } from "../dummy";
import ModalC from "./ModalC";

function TableC() {
  const [openModal, setIsOpen] = useState(false);
  const tableRows = userData.map((user) => (
    <tr>
      <td>
        <h4 class="ui image header">
          <img
            src="/images/avatar2/small/mark.png"
            class="ui mini rounded image"
          />
          <div class="content">
            {user.name}
            <div class="sub header">Executive</div>
          </div>
        </h4>
      </td>
      <td>{user.location}</td>
      <td>
        <button onClick={() => setIsOpen(true)}>View</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <table class="ui very basic collapsing celled table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {openModal && <ModalC modalIsOpen={openModal} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default TableC;
