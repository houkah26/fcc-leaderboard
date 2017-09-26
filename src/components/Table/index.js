import React from "react";

import NewTabLink from "../utility/NewTabLink";
import "./index.css";

const TableRow = ({ index, username, img, recent, alltime }) => (
  <tr className="Table__Row">
    <td className="Table__Item">{index + 1}</td>
    <td className="Table__Item">
      <NewTabLink
        url={`https://www.freecodecamp.com/${username}`}
        className="Table__User"
      >
        <img src={img} alt="user" />
        {username}
      </NewTabLink>
    </td>
    <td className="Table__Item Table__Item--center">{recent}</td>
    <td className="Table__Item Table__Item--center">{alltime}</td>
  </tr>
);

const TableHeaderButton = ({
  handleHeaderClick,
  selectedType,
  children,
  dataType
}) => (
  <th
    className={
      "Table__Item Table__Item--button " +
      (selectedType === dataType ? "Table__Item--selected" : "")
    }
    onClick={() => handleHeaderClick(dataType)}
  >
    {children}
  </th>
);

const Table = ({ tableData, handleHeaderClick, selectedType }) => (
  <table className="Table">
    <thead>
      <tr className="Table__Header">
        <th className="Table__Item Table__Item--left">#</th>
        <th className="Table__Item Table__Item--left">Name</th>
        <TableHeaderButton
          dataType={"month"}
          handleHeaderClick={handleHeaderClick}
          selectedType={selectedType}
        >
          Points in past 30 days
        </TableHeaderButton>
        <TableHeaderButton
          dataType={"allTime"}
          handleHeaderClick={handleHeaderClick}
          selectedType={selectedType}
        >
          All time points
        </TableHeaderButton>
      </tr>
    </thead>
    <tbody>
      {tableData.length > 0 &&
        tableData.map((user, index) => (
          <TableRow {...user} index={index} key={user.username} />
        ))}
    </tbody>
  </table>
);

export default Table;
