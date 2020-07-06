import React, { Component } from "react";
import Dropzone from "react-dropzone";

const container = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

class Basic extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({ files });
    };
    this.state = {
      files: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const copyFile = Object.assign([], this.state.files);
    copyFile.splice(e, 1);
    this.setState({
      files: copyFile,
    });
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })} style={container}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>
                {this.state.files.map((file) => (
                  <li key={file.name}>
                    {file.name} - {file.size} bytes
                    <button onClick={this.handleChange}>Delete</button>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}
export default Basic;
