import ReactDOM from "react-dom";
import { make } from "../dom";
import styles from "./TipTapTable.module.scss";
import TableEditor from "./TableEditor.jsx";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'


export class TipTapTable {
  constructor({ data, api, config, readOnly }) {
    this.api = api;
    this.config = config || {};

    if (!data || Object.keys(data).length === 0) {
      this.data =  {
        html: "<table style=\"width: 100%;\"><colgroup><col><col><col></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td></tr><tr><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td></tr><tr><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td><td colspan=\"1\" rowspan=\"1\"></td></tr></tbody></table>"
      };
    } else {
      this.data = data
    }
    
    this.wrapper = undefined;
    this.editor = undefined;
  }

  static get isReadOnlySupported() {
    return true
  }

  static get toolbox() {
    //this.api.toolbar.open();
    return {
      title: "Table",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
    };
  }

  static get pasteConfig() {
    return {
      tags: ["TABLE"]
    };
  }

  /**
   * Automatic sanitize config
   */
//    static get sanitize() {
//     return {
//         mark: {
//             class: 'cdx-marker'
//         }
//     };
// }
  static get sanitize() {
    return {
      table: true,
      colgroup: true, 
      col: true, 
      tbody: true, 
      tr: true, 
      th: true, 
      p: true, 
      td: true
    }
  }

  render() {
    this.wrapper = document.createElement("div");

 ReactDOM.render(<TableEditor content={this.data.html} />, this.wrapper)


    this.wrapper.addEventListener(
      "keydown",
      (e) => {
        e.stopPropagation();

        if (e.key !== "Enter") {
          return;
        }

        this.onEnterPressed(e);
      },
      true
    );

    return this.wrapper;
  }

  _resizableGrid(table) {
     
    var row = table.getElementsByTagName('tr')[0],
    cols = row ? row.children : undefined;
    if (!cols) return;

    for (var i=0;i<cols.length;i++){
        console.log('여기왔음')
        var div =  this._createDiv(table.offsetHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        console.log('여기도')
       // this._setListeners(div);
       }
  }

  _createDiv(height){
    var div = document.createElement('div');
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = '5px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    /* remove backGroundColor later */
    div.style.backgroundColor = 'red';
    div.style.userSelect = 'none';
    /* table height */
    div.style.height = height+'px';
    return div;
   }

   _setListeners(div){
    var pageX,curCol,nxtCol,curColWidth,nxtColWidth;
    div.addEventListener('mousedown', function (e) {
     curCol = e.target.parentElement;
     nxtCol = curCol.nextElementSibling;
     pageX = e.pageX;
     curColWidth = curCol.offsetWidth
     if (nxtCol)
      nxtColWidth = nxtCol.offsetWidth
    });
   
    document.addEventListener('mousemove', function (e) {
     if (curCol) {
      var diffX = e.pageX - pageX;
    
      if (nxtCol)
       nxtCol.style.width = (nxtColWidth - (diffX))+'px';
   
      curCol.style.width = (curColWidth + diffX)+'px';
     }
    });
   
   document.addEventListener('mouseup', function (e) { 
    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
    });
   }

  isRangeAtEnd(range) {
    const container = range.commonAncestorContainer;

    switch (container.nodeType) {
      case Node.TEXT_NODE:
        return (
          container.textContent?.length === range.endOffset &&
          !container.nextSibling
        );

      case Node.ELEMENT_NODE:
        return (
          container.childNodes.length === range.endOffset &&
          !isBrTag(container.lastChild)
        );
    }

    return false;
  }

  /**
   * On enter key press callback
   *
   * @param event - Keyboard event
   *
   * @private
   */
  onEnterPressed(event) {
    /**
     * If shift key pressed do nothing as browser will insert br tag
     */
    if (event.shiftKey) {
      return;
    }

    event.preventDefault();

    /**
     * If no special key pressed emulate shift + enter behaviour
     */
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    if (!range) {
      return;
    }

    // const isAtEnd = this.isRangeAtEnd(range);

    range.insertNode(make("br"));
    range.collapse();

    // if (isAtEnd) {
    //   range.insertNode(make('br'));
    //   range.collapse();
    // }

    selection?.removeAllRanges();
    selection?.addRange(range);

    // this.textarea.normalize();
  }

  _createImage(url, captionText) {
    const image = document.createElement("img");
    const caption = document.createElement("div");

    image.src = url;
    caption.placeholder = "Caption...";
    caption.contentEditable = true;
    caption.innerHTML = captionText || "";
    caption.addEventListener("click", (event) => {
      console.log(this.api.toolbar);
      this.api.toolbar.open();
    });

    this.wrapper.innerHTML = "";
    this.wrapper.appendChild(image);
    this.wrapper.appendChild(caption);

    this._acceptTuneView();
  }

  save(blockContent) {
    const tableContent = blockContent.getElementsByTagName('table')[0].outerHTML;
    console.log(tableContent)
    return {
      type: 'table',
      html: tableContent
    }
    //this.api.toolbar.open();
    // const image = blockContent.querySelector("img");
    // const caption = blockContent.querySelector("[contenteditable]");

    // return Object.assign(this.data, {
    //   url: image.src,
    //   caption: caption.innerHTML || "",
    // });
  }

  validate(savedData) {

    return true;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    return wrapper;
  }

  /**
   * @private
   * Click on the Settings Button
   * @param {string} tune — tune name from this.settings
   */
  _toggleTune(tune) {

    if(this.editor && tune.name === 'mergeCells' && editor.can().mergeCells()) {
        editor.chain().focus().mergeCells().run()
    }
  }


  onPaste(event) {
    console.log("여기1");
    switch (event.type) {
      case "tag":
        const tableTag = event.detail.data;
        this._createImage(tableTag.src);
        break;
    }
  }
}

class MarkerTool {
  static get isInline() {
    return true;
  }

  constructor() {
    this.button = null;
    this.state = false;
  }

  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.textContent = "M";

    return this.button;
  }

  surround(range) {
    if (this.state) {
      // If highlights is already applied, do nothing for now
      return;
    }

    const selectedText = range.extractContents();

    // Create MARK element
    const mark = document.createElement("MARK");

    // Append to the MARK element selected TextNode
    mark.appendChild(selectedText);

    // Insert new element
    range.insertNode(mark);
  }

  checkState(selection) {
    const text = selection.anchorNode;

    if (!text) {
      return;
    }

    const anchorElement = text instanceof Element ? text : text.parentElement;

    this.state = !!anchorElement.closest("MARK");
  }
}
