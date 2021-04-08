import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  sendData = () => {
    let obj1 = {
      id: this.props.data.id,
      title: this.props.data.title,
      url: this.props.data.url,
      thumbnailUrl: this.props.data.thumbnailUrl,
    };

    this.props.saveData(obj1);
  };

  render() {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Img
          style={{ height: "150px" }}
          variant="top"
          src={this.props.data.thumbnailUrl}
        />
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>
            ID: {this.props.data.id} <br />
            <a href={this.props.data.url}>Image URL</a>
          </Card.Text>
          {this.props.idData.includes(this.props.data.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                this.props.removeData(this.props.data.id);
              }}
            >
              Remove
            </Button>
          ) : (
            <Button variant="primary" onClick={this.sendData}>
              Compare{" "}
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
