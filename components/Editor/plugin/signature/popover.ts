import { make } from '../dom';
import styles from './popover.module.css';
import Note from './note';
import { API } from '@editorjs/editorjs';
import { SignatureTuneConfig } from './SignatureTune';
import { isRangeAtEnd, setSelectionAtEnd, throttled } from '../utils';
import {create, SimpleDrawingBoard} from 'simple-drawing-board';
import Signature from './signature';


/**
 *
 */
export default class Popover {
  /**
   * popover node
   */
  public node: HTMLElement = make('div', styles['ej-fn-popover']);

  /**
   * Editable area of popover
   */
 // public textarea: HTMLElement = make('div', styles['ej-fn-popover__textarea']);
  public signarea: HTMLCanvasElement = make('canvas', styles['ej-fn-popover__canvas'])

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
  private config: SignatureTuneConfig;
 // private context : CanvasRenderingContext2D | null;

 // private isMouseDown: boolean;
  private x: number = 0;
  private y: number = 0;

  private sdb: SimpleDrawingBoard;

  private signature: Signature;

  /**
   * @param wrapper - Tune's wrapper
   * @param api - Editor.js API
   * @param config - Tune's config
   */
  constructor(wrapper: HTMLElement, api: API, config: SignatureTuneConfig, signature: Signature) {
    this.api = api;
    this.wrapper = wrapper;
    this.readOnly = api.readOnly.isEnabled;
    this.config = config;
    this.signature = signature;
    this.makeUI();

    this.signarea["width"] = 600;
    this.signarea["height"] = 300;
    this.sdb = create(this.signarea);
    this.sdb.setLineSize(3);
    this.sdb.setLineColor("black");
   


    /**
     * If enter pressed, insert linebreak
     */
    this.node.addEventListener('keydown', (e) => {
      e.stopPropagation();

      if (e.key !== 'Enter') {
        return;
      }

      this.onEnterPressed(e);
    }, true);

    this.onClickOutside = this.onClickOutside.bind(this);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    this.move = throttled(150, this.move.bind(this)).bind(this);

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
   // this.textarea.innerHTML = note.content;
   // this.textarea.contentEditable = this.readOnly ? 'false' : 'true';

    document.addEventListener('click', this.onClickOutside, true);
    window.addEventListener('resize', this.move);

    this.move();

    this.node.classList.add(styles['ej-fn-popover--opened']);

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
    document.removeEventListener('click', this.onClickOutside, true);
    window.removeEventListener('resize', this.move);

    //????????? ????????????. 
    let ele:HTMLElement = this.wrapper.querySelector(`sup[data-id=${this.currentNote?.id}]`) as HTMLElement;
    ele.style["position"] = "relative";
    let signWrapper=make("div");
    let signimage = make<HTMLImageElement>("img");
    signimage.width= 120;
    signimage.height= 100;
    signimage.src = this.sdb.toDataURL();
    signWrapper.append(signimage);
    signWrapper.style["position"] = "absolute";
    let eleRect = ele!.getBoundingClientRect();
    let top = (eleRect.bottom - eleRect.top) / 2  - 50;
    let left = (eleRect.right - eleRect.left) / 2 - 70 ;
    signWrapper.style["top"] = top + "px"
    signWrapper.style["left"] = left + 'px';
    ele.append(signWrapper);
    this.currentNote!.removePop()

    //let target = ele!.closest('.ce-block')

    // Get the top, left coordinates of two elements
   
   // const targetRect = target!.getBoundingClientRect();

// // Calculate the top and left positions
  
    // this.signature.node.style["top"] = top + 'px';
    // this.signature.node.style["left"] = left + 'px';

    // this.signature.open(this.currentNote!);
    //this.signature.signimage.src= this.sdb.toDataURL();
    this.node.classList.remove(styles['ej-fn-popover--opened']);
    // ele!.style['backgroundColor'] = "#fff"
    // ele!.style['color'] = "#D5D3D3"
    // ele!.style['border'] = "0px"
    // ele!.style['boxShadow'] = "0 0 0 0"
    //this.textarea.contentEditable = 'false';

    if (!this.currentNote) {
      return;
    }

    if (shouldRemoveNote) {
      this.currentNote.remove();
    }

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

    this.signarea.classList.add('js-paint')
    this.node.append(this.signarea);

    if (this.readOnly) {
      return;
    }

    const buttonsWrapper = make('div', styles['ej-fn-popover__buttons']);
    const applyButton = make<HTMLButtonElement>('button', styles['ej-fn-popover__button'], {
      textContent: this.api.i18n.t('Apply'),
      type: 'button',
    });
    const removeButton = make<HTMLButtonElement>(
      'button',
      [styles['ej-fn-popover__button'], styles['ej-fn-popover__button--right']],
      {
        textContent: this.api.i18n.t('Remove'),
        type: 'button',
      }
    );
    const shortcutHint = make('span', styles['ej-fn-popover__hint'], {
      textContent: `${this.isMacOS() ? '???' : 'Ctrl'} + Enter`,
    });

    applyButton.addEventListener('click', () => this.close());
    removeButton.addEventListener('click', () => {
      const shouldDelete = confirm(this.api.i18n.t('Are you sure you want to remove this note?'));

      if (!shouldDelete) {
        return;
      }

      this.close(true);
    });

    buttonsWrapper.append(applyButton, shortcutHint, removeButton);

    this.node.append(buttonsWrapper);
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

    const blockContent = this.wrapper.querySelector('.ce-block__content')!;

    const contentStyles = window.getComputedStyle(blockContent);
    const wrapperRect = this.wrapper.getBoundingClientRect();
    const rect = node.getBoundingClientRect();

    /**
     * Reset previous values
     */
    this.node.style.width = '';

    /**
     * Top coordinate is always the same
     */
    this.node.style.top = (rect.bottom - wrapperRect.top + topMargin) + 'px';

    /**
     * If Editor zone is too narrow make popover full of it's width
     */
    if (wrapperRect.width <= defaultWidth) {
      this.node.style.width = wrapperRect.width + 'px';
      this.node.style.left = '0';

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
    const rightOverhang = (left + defaultWidth) - (wrapperRect.width - parseFloat(contentStyles.marginLeft));

    const maxOverhang = 35;

    /**
     * Trim overhanging to max value
     */
    if (leftOverhang > maxOverhang) {
      left = left + leftOverhang - maxOverhang;
    } else if (rightOverhang > maxOverhang) {
      left = left - rightOverhang + maxOverhang;
    }

    this.node.style.left = left + 'px';
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
    // if (this.isMacOS() ? event.metaKey : event.ctrlKey) {
    //   this.close();
    // }

    /**
     * If no special key pressed emulate shift + enter behaviour
     */
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    if (!range) {
      return;
    }

    // const isAtEnd = isRangeAtEnd(range);

    // range.insertNode(make('br'));
    // range.collapse();

    // if (isAtEnd) {
    //   range.insertNode(make('br'));
    //   range.collapse();
    // }

    // selection?.removeAllRanges();
    // selection?.addRange(range);

    //this.textarea.normalize();
  }

  /**
   * Click outside handler to close the popover
   *
   * @param e - MouseEvent
   */
  private onClickOutside(e: MouseEvent): void {
    const isClickedInside = (e.target as HTMLElement).closest(`.${styles['ej-fn-popover']}`) !== null;
    const isClickedOnInlineToolbar = (e.target as HTMLElement).closest(`.ce-inline-toolbar`) !== null;
    const isClickedOnSup = (e.target as HTMLElement).dataset.tune === Note.dataAttribute;

    if (isClickedInside || isClickedOnInlineToolbar) {
      return;
    }

    /**
     * If click was on the same note sup element, save lastNote to not open popover again
     */
    if (isClickedOnSup && (e.target as HTMLElement).dataset.id === this.currentNote?.node!.dataset.id) {
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
