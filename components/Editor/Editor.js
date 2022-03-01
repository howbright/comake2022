import * as React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
  }

  async componentDidMount() {
    this.initEditor();
  }

  initEditor = () => {
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Embed = require("@editorjs/embed");
    const Delimiter = require("@editorjs/delimiter");
    const Table = require("@editorjs/table");

    let content = null;
    if (this.props.data !== undefined) {
      content = this.props.data;
    }

    this.editor = new EditorJS({
      holder: "editorjs",
      logLevel: "ERROR",
      tools: {
        header: Header,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        delimiter: Delimiter,
        table: Table
      },

      data: content,
    });
  };
  async onSave(e) {
    let data = await this.editor.saver.save();

    console.log(JSON.stringify(data));

    //this.props.save(data);
  }

  render() {
    return (
      <>
        <button onClick={(e) => this.onSave(e)}>Save</button>
        <div style={{backgroundColor: 'white'}} id={"editorjs"} onChange={(e) => this.onChange(e)}></div>
      </>
    );
  }
}


export default Editor;