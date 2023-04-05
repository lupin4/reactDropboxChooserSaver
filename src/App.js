import "./styles.css";
import React from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "9hpz3qer9xw9c0o";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Upload or Choose Files from Dropbox
      </h1>
      <br />
      <br />
      <div className="container">
        <DropboxChooser appKey={APP_KEY}></DropboxChooser>
      </div>
    </div>
  );
}
