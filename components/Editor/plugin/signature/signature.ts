import { make } from "../dom";
import styles from "./signature.module.css";
import Note from "./note";
import { API } from "@editorjs/editorjs";
import { FootnotesTuneConfig } from "./SignatureTune";
import { isRangeAtEnd, setSelectionAtEnd, throttled } from "../utils";
import { nanoid } from "nanoid";
import "@deckdeckgo/drag-resize-rotate";
import { alpha } from '@mui/material/styles';

function dragElement(elmnt:HTMLElement, headerEl: HTMLElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (headerEl) {
      // if present, the header is where you move the DIV from:
      headerEl.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e:MouseEvent) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e:MouseEvent) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


/**
 *
 */
export default class Signature {
  /**
   * popover node
   */
  public node: HTMLElement = make("div", styles["ej-fn-popover"]);
//   <deckgo-drr style="--width: 120px; --height: 120px;" resize="true" drag="all">
//   <div style="background: green"></div>
// </deckgo-drr>

  /**
   * Editable area of popover
   */
  // public textarea: HTMLElement = make('div', styles['ej-fn-popover__textarea']);
  public signimage: HTMLImageElement = make(
    "img",
    styles["ej-fn-popover__image"]
  );

  /**
   * Current note to edit
   */
  private currentNote: Note | null = null;

  /**
   * Last opened note
   *
   * @private
   */
  private lastNote: Note | null = null;

  /**
   * Tune's wrapper
   */
  private wrapper: HTMLElement;

  /**
   * Editor.js API
   */
  private readonly api: API;

  /**
   * ReadOnly state
   *
   * @private
   */
  private readOnly: boolean;

  /**
   * Tune's config
   */
  private config: FootnotesTuneConfig;
  // private context : CanvasRenderingContext2D | null;

  // private isMouseDown: boolean;
  private x: number = 0;
  private y: number = 0;

  /**
   * @param wrapper - Tune's wrapper
   * @param api - Editor.js API
   * @param config - Tune's config
   */
  constructor(wrapper: HTMLElement, api: API, config: FootnotesTuneConfig) {
    this.api = api;
    this.wrapper = wrapper;
    this.readOnly = api.readOnly.isEnabled;
    this.config = config;

    // this.signimage["width"] = 120;
    // this.signimage["height"] = 120;

    this.makeUI();

    /**
     * If enter pressed, insert linebreak
     */
    // this.node.addEventListener('keydown', (e) => {
    //   e.stopPropagation();

    //   if (e.key !== 'Enter') {
    //     return;
    //   }

    //   this.onEnterPressed(e);
    // }, true);

    //this.onClickOutside = this.onClickOutside.bind(this);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    //this.move = throttled(150, this.move.bind(this)).bind(this);
  }

  /**
   * Opens popover
   *
   * @param note - note to edit
   */
  public open(note: Note): void {
    if (this.lastNote === note) {
      this.close();
      this.lastNote = null;

      return;
    }

    this.currentNote = note;
    //    // this.textarea.innerHTML = note.content;
    //    // this.textarea.contentEditable = this.readOnly ? 'false' : 'true';

    //     document.addEventListener('click', this.onClickOutside, true);
    //     window.addEventListener('resize', this.move);

    //     this.move();

    this.node.classList.add(styles["ej-fn-popover--opened"]);

    /**
     * Set cursor to the end of text
     */
    //setSelectionAtEnd(this.textarea);
  }

  /**
   * Closes popover and saves note's content
   *
   * @param shouldRemoveNote - if true, removes current note
   */
  public close(shouldRemoveNote = false): void {
    // document.removeEventListener('click', this.onClickOutside, true);
    // window.removeEventListener('resize', this.move);

    this.node.classList.remove(styles["ej-fn-popover--opened"]);
    //this.textarea.contentEditable = 'false';

    if (!this.currentNote) {
      return;
    }

    // if (shouldRemoveNote) {
    //   this.currentNote.remove();
    // }

    if (!this.readOnly) {
      // this.currentNote.content = this.textarea.innerHTML;
    }

    this.currentNote = null;
  }

  /**
   * Creates popover DOM tree
   *
   * @private
   */
  private makeUI(): void {
    //this.textarea.dataset.inlineToolbar = 'true';
    //this.textarea.dataset.placeholder = this.api.i18n.t(this.config.placeholder || 'Write a footnote');


    const header = make<HTMLElement>("div", styles["ej-fn-header"]);

    this.node.append(header, this.signimage);

    this.node.addEventListener("mouseover", function( event ) {
        header.style["backgroundColor"] = "#333"
        header.style["cursor"] = "move"
        header.style["opacity"] = "1"
    });

    this.node.addEventListener("mouseout", function( event ) {
        header.style["opacity"] = "0"
        header.style["cursor"] = "default"
    });
   


    // if (this.readOnly) {
    //   return;
    // }

    const buttonsWrapper = make("div", styles["ej-fn-popover__buttons"]);
    const applyButton = make<HTMLButtonElement>(
      "button",
      styles["ej-fn-popover__button"],
      {
        textContent: this.api.i18n.t("적용"),
        type: "button",
      }
    );
    // const removeButton = make<HTMLButtonElement>(
    //   'button',
    //   [styles['ej-fn-popover__button'], styles['ej-fn-popover__button--right']],
    //   {
    //     textContent: this.api.i18n.t('Remove'),
    //     type: 'button',
    //   }
    // );
    // const shortcutHint = make('span', styles['ej-fn-popover__hint'], {
    //   textContent: `${this.isMacOS() ? '⌘' : 'Ctrl'} + Enter`,
    // });

    var wrapper = this.node;
    var image1 = this.signimage;
    applyButton.addEventListener('click', () => {
        image1.height = image1!.height;
        image1.width = image1!.width;
        applyButton.remove()
        header.style["opacity"] = "0";
        wrapper.style["border"] = "0"
    });

    // removeButton.addEventListener('click', () => {
    //   const shouldDelete = confirm(this.api.i18n.t('Are you sure you want to remove this note?'));

    //   if (!shouldDelete) {
    //     return;
    //   }

    //   this.close(true);
    // });

  //  buttonsWrapper.append(applyButton);
  //  this.node.append(buttonsWrapper);
    dragElement(this.node, header)

  }


  /**
   * Move popover to passed note
   */
  private move(): void {
    if (!this.currentNote) {
      return;
    }

    const { node } = this.currentNote;
    const topMargin = 5;
    const defaultWidth = 600;
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const leftMargin = defaultWidth / 2; // half of default width

    const blockContent = this.wrapper.querySelector(".ce-block__content")!;

    const contentStyles = window.getComputedStyle(blockContent);
    const wrapperRect = this.wrapper.getBoundingClientRect();
    const rect = node.getBoundingClientRect();

    /**
     * Reset previous values
     */
    this.node.style.width = "";

    /**
     * Top coordinate is always the same
     */
    this.node.style.top = rect.bottom - wrapperRect.top + topMargin + "px";

    /**
     * If Editor zone is too narrow make popover full of it's width
     */
    if (wrapperRect.width <= defaultWidth) {
      this.node.style.width = wrapperRect.width + "px";
      this.node.style.left = "0";

      return;
    }

    /**
     * Left coordinate is calculated relatively to wrapper
     */
    let left = rect.left - wrapperRect.left - leftMargin;

    /**
     * Same for overhanging for both right and left sides
     */
    const leftOverhang = parseFloat(contentStyles.marginLeft) - left;
    const rightOverhang =
      left +
      defaultWidth -
      (wrapperRect.width - parseFloat(contentStyles.marginLeft));

    const maxOverhang = 35;

    /**
     * Trim overhanging to max value
     */
    if (leftOverhang > maxOverhang) {
      left = left + leftOverhang - maxOverhang;
    } else if (rightOverhang > maxOverhang) {
      left = left - rightOverhang + maxOverhang;
    }

    this.node.style.left = left + "px";
  }

  /**
   * On enter key press callback
   *
   * @param event - Keyboard event
   *
   * @private
   */
  private onEnterPressed(event: KeyboardEvent): void {
    /**
     * If shift key pressed do nothing as browser will insert br tag
     */
    if (event.shiftKey) {
      return;
    }

    event.preventDefault();

    /**
     * If meta for MacOS or ctrl for others is pressed, apply changes
     */
    if (this.isMacOS() ? event.metaKey : event.ctrlKey) {
      this.close();
    }

    /**
     * If no special key pressed emulate shift + enter behaviour
     */
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    if (!range) {
      return;
    }

    const isAtEnd = isRangeAtEnd(range);

    range.insertNode(make("br"));
    range.collapse();

    if (isAtEnd) {
      range.insertNode(make("br"));
      range.collapse();
    }

    selection?.removeAllRanges();
    selection?.addRange(range);

    //this.textarea.normalize();
  }

  /**
   * Click outside handler to close the popover
   *
   * @param e - MouseEvent
   */
  private onClickOutside(e: MouseEvent): void {
    const isClickedInside =
      (e.target as HTMLElement).closest(`.${styles["ej-fn-popover"]}`) !== null;
    const isClickedOnInlineToolbar =
      (e.target as HTMLElement).closest(`.ce-inline-toolbar`) !== null;
    const isClickedOnSup =
      (e.target as HTMLElement).dataset.tune === Note.dataAttribute;

    if (isClickedInside || isClickedOnInlineToolbar) {
      return;
    }

    /**
     * If click was on the same note sup element, save lastNote to not open popover again
     */
    if (
      isClickedOnSup &&
      (e.target as HTMLElement).dataset.id ===
        this.currentNote?.node!.dataset.id
    ) {
      this.lastNote = this.currentNote;
    } else {
      this.lastNote = null;
    }

    this.close();
  }

  /**
   * Returns true if OS is Mac OS
   *
   * @private
   */
  private isMacOS(): boolean {
    return /Mac/.test(window.navigator.userAgent);
  }
}
