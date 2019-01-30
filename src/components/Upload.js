import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "filepond/dist/filepond.min.css";
import Title from "./Title";
registerPlugin(FilePondPluginImagePreview);

export default class Upload extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="our" title="Uploading From" />
        <FilePond allowMultiple={true} />
      </React.Fragment>
    );
  }
}
