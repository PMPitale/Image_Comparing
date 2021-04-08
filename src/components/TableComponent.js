import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  photoImage = (e) => {
    return <img src={e} alt="Dummy" width="80" height="80" />;
  };

  render() {
    return (
      <DataTable
        scrollable={true}
        scrollHeight="30vh"
        value={this.props.tableData}
      >
        <Column
          field="thumbnailUrl"
          header="Image"
          body={(e) => this.photoImage(e.thumbnailUrl)}
        ></Column>
        <Column field="id" header="Id"></Column>
        <Column field="url" header="URL"></Column>
        <Column field="title" header="Title"></Column>
      </DataTable>
    );
  }
}

export default TableComponent;
