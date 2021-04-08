import React, { Component } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import TableComponent from "./TableComponent";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: [],
      tableData: [],
      id: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.setState({ imageData: response.data.slice(0, 300) });
      })
      .catch((err) => {
        console.log(err.data);
      });
  }

  saveData = (fromPhoto) => {
    let tableData = [...this.state.tableData];
    tableData.push(fromPhoto);
    this.setState({
      tableData: tableData,
    });

    let id = [...this.state.id];
    id.push(fromPhoto.id);
    this.setState({
      id: id,
    });
  };

  removeData = (id) => {
    this.setState({ id: this.state.id.filter((dataId) => dataId !== id) });
    this.setState({
      tableData: this.state.tableData.filter((tableId) => tableId.id !== id),
    });
  };

  render() {
    console.log(this.state.tableData);
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <h4 className="title">Photos</h4>
            <section className="cards">
              <CardColumns className="cardColumns">
                {this.state.imageData.map((data) => {
                  return (
                    <CardComponent
                      key={data.id}
                      saveData={this.saveData}
                      removeData={this.removeData}
                      idData={this.state.id}
                      data={data}
                    />
                  );
                })}
              </CardColumns>
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12}>
            <h4 className="title">Comparison Table</h4>
            <TableComponent tableData={this.state.tableData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
