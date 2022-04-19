import ReactDOM from "react-dom";
import { make } from "../dom";
import ListEditor from "./ListEditor.jsx";


export class TipTapList {
  constructor({ data, api, config, readOnly }) {
    this.api = api;
    this.config = config || {};

    if (!data || Object.keys(data).length === 0) {
      this.data =  {
        html: ""
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
      title: "list",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>',
    };
  }

  static get pasteConfig() {
    return {
      tags: ["OL","UL","LI"],
      classes: ['circled-decimal']
    };
  }

  /**
   * Automatic sanitize config
   */

  static get sanitize() {
    return {
      ul: true,
      ol: true, 
      li: true, 
      sup: true,
    }
  }

  render() {
    this.wrapper = document.createElement("div");


    ReactDOM.render(<ListEditor content={this.data.html} />, this.wrapper)

    this.wrapper.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") {
            this.onEnterPressed(e);
            return;
        }
        if (e.key !== "Tab"){
            return;
        }
       

        
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
        var div =  this._createDiv(table.offsetHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
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
   
    let listNode = range.commonAncestorContainer.parentNode.closest('li')
    if(!listNode) {
        if(range.commonAncestorContainer.parentNode.lastChild.tagName === 'P'){
            let listNode = range.commonAncestorContainer.parentNode.lastChild.remove();
        }
        return;
    }
    event.stopPropagation();
    
    listNode.parentNode.insertBefore(make("li"),listNode);
    //range.collapse();

    // if (isAtEnd) {
    //   range.insertNode(make('br'));
    //   range.collapse();
    // }

    selection?.removeAllRanges();
    selection?.addRange(range);

    // this.textarea.normalize();
  }

  save(blockContent) {
    const listContent = blockContent.getElementsByTagName('ol')[0].outerHTML;
    console.log(listContent)
    return {
      type: 'list',
      html: listContent
    }
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
