import { make } from '../dom';
import styles from './note.module.css';
import Popover from './popover';
import { nanoid } from 'nanoid';

/**
 * Interface describes data footnote outputs
 */
export interface NoteData {
  /**
   * Note's id
   */
  id: string;

  /**
   * Note's content
   */
  content: string;

  /**
   * Note's superscript index
   */
  superscript: number;
}

/**
 * Note object
 */
export default class Note {
  /**
   * data-tune value
   */
  public static dataAttribute = 'footnotes';

  /**
   * Note's id
   */
  public id: string;

  /**
   * Note's content
   */
  public content = '';

  /**
   * Range which contain sup element
   */
  public range: Range;

  /**
   * Sup element
   */
  public node: HTMLElement = make('sup', styles['ej-fn-sup'], { contentEditable: 'false' });

  /**
   * Note's index
   */
  private _index = 0;

  /**
   * Editable popover
   */
  private popover: Popover;

  /**
   * @param rangeOrNode - range to insert sup or existing sup to hydrate
   * @param popover - editable popover
   * @param id - Note's id if presented
   */
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  constructor(rangeOrNode: Range | HTMLElement, popover: Popover, id = "a" + nanoid(6)) {
    this.popover = popover;
    this.id = id;
    this.node.textContent = "서명/인"

    if (rangeOrNode instanceof Range) {
      this.range = rangeOrNode;
      rangeOrNode.insertNode(this.node);
    } else {
      this.node = rangeOrNode;
      this.node.contentEditable = 'false';
      this.node.classList.add(styles['ej-fn-sup']);

      this.range = new Range();

      this.range.selectNode(this.node);
    }

    this.node.dataset.tune = Note.dataAttribute;
    this.node.dataset.id = this.id;
    this.node.addEventListener('click', () => {
     // this.node.classList.add(styles['positionrel'])
     this.popover.open(this);
    //  var rect = this.node.getBoundingClientRect();
    //   console.log(rect.top, rect.right, rect.bottom, rect.left);  
    //   const outbox: HTMLElement = make('div', styles['fixed']);
    //   this.node.append(outbox)
     // outbox.style.top = (rect.top - 50) + 'px';
     // outbox.style.left = (rect.left - 50) + 'px';

      //const bodyE = document.getElementsByClassName("codex-editor-overlay")[0];
      //bodyE?.append(outbox);
    //  const outbox: HTMLElement = make('div', styles['outbox'], { contentEditable: 'false' });
    //  const signebox: HTMLElement = make('div', styles['signbox'], { contentEditable: 'true' });
    //  outbox.appendChild(signebox);
     //signebox.classList.add(styles['both'])
    //  this.node.appendChild(outbox);

    });
  }

  /**
   * Returns note's index
   */
  public get index(): number {
    return this._index;
  }

  /**
   * Updates note's index
   */
  public set index(index: number) {
    this._index = index;

    // this.node.textContent = this._index.toString();
  }

  /**
   * Removes sup element from DOM
   */
  public remove(): void {
    this.node.remove();
  }

  /**
   * Save's notes content
   */
  public save(): NoteData {
    return {
      id: this.id,
      content: this.content,
      superscript: this.index,
    };
  }
}
