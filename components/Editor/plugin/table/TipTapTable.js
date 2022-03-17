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
  constructor({ data, api, config }) {
    this.api = api;
    //this.api.toolbar.open();
    this.config = config || {};
    this.data = {
      url: data.url || "",
      caption: data.caption || "",
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground:
        data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
    };
    this.wrapper = undefined;
    this.editor = undefined;
    this.settings = [
      {
        name: "mergeCells",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z" /></sv`,
      }
    ];
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
      tags: ["IMG"],
      files: {
        mimeTypes: ["image/*"],
        extensions: ["gif", "jpg", "png"], // You can specify extensions instead of mime-types
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
        },
      },
    };
  }

  /**
   * Automatic sanitize config
   */
  static get sanitize() {
    return {
      url: false, // disallow HTML
      caption: {}, // only tags from Inline Toolbar
    };
  }

  render() {
    this.wrapper = document.createElement("div");
    let buttonswrapper = document.createElement("div");

    this.settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add(this.api.styles.settingsButton);
      button.innerHTML = tune.icon;
      buttonswrapper.appendChild(button);

      button.addEventListener("click", () => {
        if (tune.name === 'mergeCells' && this.editor.can().mergeCells()) {
          this.editor.chain().focus().mergeCells().run()} 
        }
      );
    });

  var  showtool = true;
 ReactDOM.render(<TableEditor showtool={showtool}/>, this.wrapper)
//  var editorWrapper = make('div');
//     this.editor = new Editor({
//       element: editorWrapper,
//       extensions: [
//           StarterKit, 
//           Table.configure({
//             HTMLAttributes: {
//                 class: 'my-custom-class',
//               },
//             resizable: true,
//           }),
//         TableRow, 
//         TableHeader, 
//         TableCell],
//       content: "<p>Hello World!</p>",
//       autofocus: true,
//       editable: true,
//       injectCSS: false,
//       content: `
//       <table>
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th colspan="3">Description</th>
//           </tr>
//           <tr>
//             <td>Cyndi Lauper</td>
//             <td>singer</td>
//             <td>songwriter</td>
//             <td>actress</td>
//           </tr>
//           <tr>
//             <td>Philipp Kühn</td>
//             <td>designer</td>
//             <td>developer</td>
//             <td>maker</td>
//           </tr>
//           <tr>
//             <td>Hans Pagel</td>
//             <td>wrote this</td>
//             <td colspan="2">that’s it</td>
//           </tr>
//         </tbody>
//       </table>
//     `,
//     });

//     this.wrapper.classList.add(styles['ProseMirror'])
//    this.wrapper.appendChild(buttonswrapper);
//    this.wrapper.appendChild(editorWrapper);

// this.wrapper.addEventListener(
//   "focusin",
//   (e) => {
//     e.stopPropagation();
//     console.log('in')
//     showtool = true;
//   },
//   true
// );

// this.wrapper.addEventListener(
//   "focusout",
//   (e) => {
//     e.stopPropagation();
//     console.log('out')
//     showtool = false;
//   },
//   true
// );


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
    //this.api.toolbar.open();
    const image = blockContent.querySelector("img");
    const caption = blockContent.querySelector("[contenteditable]");

    return Object.assign(this.data, {
      url: image.src,
      caption: caption.innerHTML || "",
    });
  }

  validate(savedData) {
    //this.api.toolbar.open();
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    this.settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add(this.api.styles.settingsButton);
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      button.addEventListener("click", () => {
        this._toggleTune(tune.name);
      });
    });

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
        const imgTag = event.detail.data;
        this._createImage(imgTag.src);
        break;
      case "file":
        console.log("여기2");
        /* We need to read file here as base64 string */
        const file = event.detail.file;
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          this._createImage(loadEvent.target.result);
        };

        reader.readAsDataURL(file);
        break;
      case "pattern":
        console.log("여기3");
        const src = event.detail.data;

        this._createImage(src);
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
