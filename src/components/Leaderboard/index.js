import React, { Component } from "react";

import Table from "../Table";
import Loading from "../Loading";
import "./index.css";

const apiUrl = dataType => {
  const urlDataType = dataType === "month" ? "recent" : "alltime";

  return `https://fcctop100.herokuapp.com/api/fccusers/top/${urlDataType}`;
};

export default class Leaderboard extends Component {
  state = {
    selectedType: "month",
    data: {
      month: [],
      allTime: []
    }
  };

  componentDidMount() {
    this.fetchData(this.state.selectedType);
  }

  fetchData = dataType => {
    fetch(apiUrl(dataType))
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          data: { ...prevState.data, [dataType]: data }
        }));
      });
  };

  handleHeaderClick = dataType => {
    this.setState({ selectedType: dataType });
    this.fetchData(dataType);
  };

  render() {
    const { data, selectedType } = this.state;
    const tableData = data[selectedType];

    return (
      <div className="Leaderboard">
        <div className="Leaderboard__Header">Leaderboard</div>
        <div className="Leaderboard__Content">
          {tableData.length > 0 ? (
            <Table
              tableData={tableData}
              handleHeaderClick={this.handleHeaderClick}
              selectedType={selectedType}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}
