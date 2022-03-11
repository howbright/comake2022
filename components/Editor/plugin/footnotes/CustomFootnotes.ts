import styles from  './CustomFootnotes.module.css';

import { API, BlockTune } from '@editorjs/editorjs';
import { make } from '../dom';
import Popover from './popover';
import Note, {NoteData} from './note';
import IconAddFootnote from './assets/add-footnote.svg';
//process.env.NEXT_PUBLIC_BACKEND_URL + "/test.jpeg"
import Shortcut from '@codexteam/shortcuts';

/**
 * Type of Footnotes Tune data
 */
export type FootnotesData = NoteData[];

/**
 * Tune user config
 */
export interface FootnotesTuneConfig {
  placeholder?: string;
  shortcut?: string;
}

/**
 * FootnotesTune for Editor.js
 */
export default class FootnotesTune implements BlockTune {
  /**
   * Specify this is a Block Tune
   */
  public static isTune = true;

  /**
   * Sanitize config for Tune
   */
  public static sanitize = {
    sup: {
      'data-tune': Note.dataAttribute,
      'data-id': true,
    },
  };

  /**
   * Notes
   */
  private static notes: Note[] = [];

  /**
   * Tune's wrapper for tools' content
   */
  private wrapper = make('div', styles['ej-fn-wrapper']);

  /**
   * Editable popover for notes
   */
  private popover: Popover;

  /**
   * We need to observe mutations to check if footnote removed
   */
  private observer = new MutationObserver(this.contentDidMutated.bind(this));

  /**
   * Data passed on render
   */
  private readonly data: NoteData[] = [];


  /**
   * Editor.js API
   */
  private readonly api: API;

  /**
   * Shortcut instance
   */
  private shortcut: any;

  /**
   * Tune's config
   *
   * @private
   */
  private config: FootnotesTuneConfig;

  /**
   * @class
   *
   * @param data - data passed on render
   * @param api - Editor.js API
   * @param config - Tune's config
   */
  constructor({ data, api, config = {} }: { data: FootnotesData, api: API, config?: FootnotesTuneConfig }) {
    this.data = data;
    this.api = api;
    this.config = config;

    this.popover = new Popover(this.wrapper, api, this.config);
  }

  /**
   * Render Tune icon
   */
  public render(): HTMLElement {
    const selection = window.getSelection()!;
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    const tuneWrapper = make('div', styles['ej-fn-tune']);
    const icon = make('div', styles['ej-fn-tune__icon'], {
      innerHTML: '<svg width="16" height="16" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"> <path d="M200 46h15.46c.68 0 1.353 0 2.019.005l1.98.017 1.942.027c.32.005.639.011.956.018l1.886.043.93.026 1.83.06 1.797.07 1.762.081c.872.043 1.731.09 2.579.142l1.678.108c.277.018.553.038.827.058l1.63.123 1.6.135c.528.046 1.05.095 1.569.145l1.54.155.759.082 1.496.171c.494.059.984.12 1.47.182l1.441.192c6.667.921 12.475 2.183 17.754 3.773l1.123.345c1.302.41 2.571.839 3.815 1.289l1.059.39c.35.132.7.266 1.047.401l1.035.41c.344.139.685.279 1.025.42l1.015.43 1.005.44.997.45.495.229.985.464.979.474.972.483.484.246.964.498.96.508c15.97 8.54 28.504 21.074 37.045 37.045l.508.96.498.964.489.97.24.486.474.979.464.985.455.993c.075.166.15.332.223.499l.44 1.005.43 1.015c.142.34.282.681.42 1.025l.41 1.035c.136.347.27.696.401 1.047l.391 1.06c.45 1.243.88 2.512 1.289 3.814l.345 1.123c1.59 5.279 2.852 11.087 3.773 17.754l.192 1.442.092.73.177 1.484c.028.249.057.5.084.751l.161 1.526c.078.77.152 1.55.221 2.342l.135 1.6.123 1.63c.02.274.04.55.058.827l.108 1.678c.034.565.067 1.136.097 1.711l.087 1.745.04.885.07 1.796.06 1.832.048 1.867.02.948.033 1.923c.004.323.009.648.012.975l.017 1.98.005 2.019v72.92l-.005 2.019-.017 1.98-.027 1.942c-.005.32-.011.639-.018.956l-.043 1.886-.026.93-.06 1.83-.07 1.797-.081 1.762c-.043.872-.09 1.731-.142 2.579l-.108 1.678c-.018.277-.038.553-.058.827l-.123 1.63-.135 1.6c-.046.528-.095 1.05-.145 1.569l-.155 1.54-.082.759-.171 1.496c-.059.494-.12.984-.182 1.47l-.192 1.441c-.921 6.667-2.183 12.475-3.773 17.754l-.345 1.123a94.514 94.514 0 01-1.289 3.815l-.39 1.059c-.132.35-.266.7-.401 1.047l-.41 1.035a93.96 93.96 0 01-.42 1.025l-.43 1.015-.44 1.005-.45.997-.229.495-.464.985-.474.979-.483.972-.246.484-.498.964-.508.96c-8.54 15.97-21.074 28.504-37.045 37.045l-.96.508-.964.498-.97.489-.486.24-.979.474-.985.464-.993.455c-.166.075-.332.15-.499.223l-1.005.44-1.015.43c-.34.142-.681.282-1.025.42l-1.035.41c-.347.136-.696.27-1.047.401l-1.06.391c-1.243.45-2.512.88-3.814 1.289l-1.123.345c-5.279 1.59-11.087 2.852-17.754 3.773l-1.442.192-.73.092-1.484.177c-.249.028-.5.057-.751.084l-1.526.161c-.77.078-1.55.152-2.342.221l-1.6.135-1.63.123c-.274.02-.55.04-.827.058l-1.678.108c-.565.034-1.136.067-1.711.097l-1.745.087-.885.04-1.796.07-1.832.06-1.867.048-.948.02-1.923.033c-.323.004-.648.009-.975.012l-1.98.017-2.019.005h-30.92l-2.019-.005-1.98-.017-1.942-.027c-.32-.005-.639-.011-.956-.018l-1.886-.043-.93-.026-1.83-.06-1.797-.07-1.762-.081c-.872-.043-1.731-.09-2.579-.142l-1.678-.108c-.277-.018-.553-.038-.827-.058l-1.63-.123-1.6-.135a187.24 187.24 0 01-1.569-.145l-1.54-.155-.759-.082-1.496-.171c-.494-.059-.984-.12-1.47-.182l-1.441-.192c-6.667-.921-12.475-2.183-17.754-3.773l-1.123-.345a94.514 94.514 0 01-3.815-1.289l-1.059-.39c-.35-.132-.7-.266-1.047-.401l-1.035-.41a93.948 93.948 0 01-1.025-.42l-1.015-.43-1.005-.44-.997-.45-.495-.229-.985-.464-.979-.474-.972-.483-.484-.246-.964-.498-.96-.508c-15.97-8.54-28.504-21.074-37.045-37.045l-.508-.96-.498-.964-.489-.97-.24-.486-.474-.979-.464-.985-.455-.993a96.91 96.91 0 01-.223-.499l-.44-1.005-.43-1.015c-.142-.34-.282-.681-.42-1.025l-.41-1.035a93.252 93.252 0 01-.401-1.047l-.391-1.06a94.514 94.514 0 01-1.289-3.814l-.345-1.123c-1.59-5.279-2.852-11.087-3.773-17.754l-.192-1.442a157.65 157.65 0 01-.092-.73l-.177-1.484c-.028-.249-.057-.5-.084-.751l-.161-1.526c-.078-.77-.152-1.55-.221-2.342l-.135-1.6-.123-1.63c-.02-.274-.04-.55-.058-.827l-.108-1.678c-.034-.565-.067-1.136-.097-1.711l-.087-1.745a256.59 256.59 0 01-.04-.885l-.07-1.796-.06-1.832-.048-1.867-.02-.948-.033-1.923a336 336 0 01-.012-.975l-.017-1.98c-.001-.333-.005-.668-.005-1.005V197h40v40.661l.008 1.501.013 1.465.02 1.429.026 1.394.033 1.361.04 1.328.046 1.295.026.635.087 1.86.065 1.202.073 1.173.078 1.144.086 1.116.091 1.088.098 1.062.052.521.108 1.024.114.998.12.975c.02.16.042.32.063.478l.13.94.136.918.07.45.147.886.152.865.158.846.165.826.17.809.178.79.183.775c.03.128.062.255.094.381l.192.75.099.37.202.729.208.714.214.702.22.689.226.677.233.667.238.656.245.647.25.638.257.63.262.623.269.617.274.61.28.606.287.601.44.896.302.593.307.592.313.59c5.316 9.942 13.117 17.743 23.058 23.06l.591.312.592.307.593.301.896.441.601.286.606.28.61.275.617.269.623.262.63.257.638.25.647.245.656.238.667.233.677.226.69.22.7.214.715.208.729.202.743.196c.25.064.503.127.758.19l.774.182.791.178.809.17.826.165.846.158.865.152.886.146.907.14.461.067.94.13.963.124.986.117 1.526.164 1.049.101 1.075.095 1.102.089 1.13.082 1.158.075 1.187.07 1.217.062 1.248.056 1.279.05 1.311.043 1.344.036 1.378.03 1.411.023 1.447.017 2.238.012h33.322l1.516-.007 1.479-.013 1.443-.02 1.407-.028 1.373-.033 1.339-.04 1.306-.048 1.274-.054 1.851-.093 1.197-.07 1.166-.077 1.138-.084 1.11-.09.544-.048 1.069-.1 1.042-.107 1.017-.113.992-.12.968-.125.945-.133.922-.139.453-.072.89-.149.87-.155.849-.161.83-.168.812-.174.794-.18.778-.188.761-.193.746-.2.731-.205.718-.212.704-.219.692-.224.68-.23.67-.238.66-.243.65-.25.64-.255.634-.261.627-.268.62-.274.614-.28.913-.43.604-.296.6-.3.6-.308.597-.313.298-.159c9.94-5.316 17.742-13.117 23.058-23.058l.313-.591.307-.592.301-.593.441-.896.286-.601.28-.606.275-.61.269-.617.262-.623.257-.63.25-.638.245-.647.238-.656.233-.667.226-.677.22-.69.214-.7.208-.715.202-.729.196-.743c.064-.25.127-.503.19-.758l.182-.774.178-.791.17-.809.165-.826.158-.846.152-.865.146-.886.14-.907.067-.461.13-.94.124-.963.117-.986.164-1.526.101-1.049.095-1.075.089-1.102.082-1.13.075-1.158.07-1.187.062-1.217.056-1.248.05-1.279.043-1.311.036-1.344.03-1.378.023-1.411.017-1.447.012-2.238V162.34l-.007-1.516-.013-1.479-.02-1.443-.028-1.407-.033-1.373-.04-1.339-.048-1.306-.054-1.274-.093-1.851-.07-1.197-.077-1.166-.084-1.138-.09-1.11-.048-.544-.1-1.069-.107-1.042-.113-1.017-.12-.992-.125-.968-.133-.945-.139-.922a86.304 86.304 0 00-.072-.453l-.149-.89-.155-.87-.161-.849-.168-.83-.174-.812-.18-.794-.188-.778-.193-.761-.2-.746-.205-.731-.212-.718-.219-.704-.224-.692-.23-.68-.238-.67-.243-.66-.25-.65-.255-.64-.261-.634-.268-.627-.274-.62-.28-.614-.43-.913-.296-.604-.3-.6-.308-.6-.313-.597-.159-.298c-5.316-9.94-13.117-17.742-23.058-23.058l-.585-.31-.586-.304-.587-.298-.59-.293-.593-.287-.597-.28-.602-.275-.607-.27a56.729 56.729 0 00-.305-.132l-.617-.26-.623-.255-.314-.125-.635-.246-.32-.12-.65-.237-.658-.231-.333-.113-.674-.222-.686-.216-.699-.21-.711-.204-.726-.198-.74-.192-.375-.094-.763-.182-.779-.177-.796-.17-.814-.165-.832-.159-.423-.076-.86-.15-.882-.143-.902-.136-.923-.131-.946-.124-.969-.119-.992-.112-1.017-.105-1.042-.1-.53-.047-1.081-.09-1.108-.084-.564-.04-1.15-.073-1.177-.068-1.207-.061-1.238-.055-1.268-.05-1.3-.041-1.331-.036-1.365-.03-1.398-.022-1.433-.017-1.467-.01-.763-.002L200 86V46zm-62.705-3.874c5.1 0 7.427 1.052 9.32 3.213 1.821 2.078 2.767 4.91 2.837 8.499l.004.434v90.52c0 10.594-4.054 15.89-12.161 15.89-3.61 0-9.51-1.08-11.7-3.24-2.113-2.087-3.207-5.131-3.28-9.134l-.003-.432V75.934l-1.208.96-1.176.925-1.703 1.328-1.633 1.254-1.565 1.181-1.008.747-.492.361-.965.699-.472.337-.923.65-.897.62-.439.297-.858.571c-.141.093-.28.184-.42.274l-.82.524-.402.25-.785.478c-8.764 5.233-13.075 4.478-17.093-1.39-2.895-4.229 2.834-11.931 10.26-19.34l.918-.906.464-.451.937-.899.948-.891.954-.883.959-.874.48-.432.96-.856.956-.842.952-.827 1.41-1.208.925-.782 1.357-1.134 1.312-1.083 1.259-1.025 1.951-1.57 1.405-1.115 2.744-2.16c4.879-3.841 8.558-5.526 12.052-6.198l.58-.103.58-.086c.384-.05.769-.091 1.153-.122l.578-.04c.29-.017.579-.029.87-.036l.584-.01.294-.001z"/></svg>'
  ,
    });
    const label = make('div', styles['ej-fn-tune__label'], {
      innerText: this.api.i18n.t('Footnote'),
    });

    tuneWrapper.appendChild(icon);
    tuneWrapper.appendChild(label);

    if (!range || !this.wrapper.contains(range.startContainer)) {
      tuneWrapper.classList.add(styles['ej-fn-tune--disabled']);
    } else {
      tuneWrapper.addEventListener('click', () => {
        this.onClick(range);
      });
    }

    return tuneWrapper;
  }

  /**
   * Saves notes data
   */
  public save(): FootnotesData {
    const blockNotes = Array.from(this.wrapper.querySelectorAll(`sup[data-tune=${Note.dataAttribute}]`));

    return FootnotesTune.notes.filter(note => blockNotes.includes(note.node)).map(note => note.save());
  }

  /**
   * Wraps plugins content with Tune's own wrapper
   *
   * @param pluginsContent - Tool's content
   */
  public wrap(pluginsContent: HTMLElement): HTMLElement {
    this.wrapper.append(pluginsContent, this.popover.node);

    this.hydrate(pluginsContent);

    this.observer.observe(this.wrapper, {
      childList: true,
      subtree: true,
    });

    this.shortcut = new Shortcut({
      on: this.wrapper,
      name: this.config.shortcut || 'CMD+SHIFT+F',
      callback: (): void => {
        const selection = window.getSelection();

        if (!selection) {
          return;
        }

        const range = selection.getRangeAt(0);

        if (!range) {
          return;
        }

        this.onClick(range);
      },
    });

    return this.wrapper;
  }

  /**
   * Tune destory method to clean up
   */
  public destroy(): void {
    this.shortcut?.remove();
  }

  /**
   * Callback on click on Tunes icon
   *
   * @param range - selected range at Editor zone
   */
  private onClick(range: Range): void {
    range.collapse(false);

    const note = new Note(range, this.popover);

    this.insertNote(note);
    this.popover.open(note);

    this.api.toolbar.toggleBlockSettings(false);
  }

  /**
   * Inserts new note to notes array
   *
   * @param newNote - note to insert
   */
  private insertNote(newNote: Note): void {
    let nextNoteIndex = FootnotesTune.notes.findIndex(note =>
      newNote.range.compareBoundaryPoints(Range.START_TO_START, note.range) === -1
    );

    if (nextNoteIndex === -1) {
      nextNoteIndex = FootnotesTune.notes.length;
    }

    FootnotesTune.notes.splice(nextNoteIndex, 0, newNote);
  }

  /**
   * Mutation Observer callback
   *
   * @param mutationsList - mutation records array
   */
  private contentDidMutated(mutationsList: MutationRecord[]): void {
    const shouldUpdateIndices = mutationsList.some(record => {
      const supAdded = Array.from(record.addedNodes).some(node => node.nodeName === 'SUP');
      const supRemoved = Array.from(record.removedNodes).some(node => {
        if (node.nodeName !== 'SUP') {
          return false;
        }

        const index = parseInt(node.textContent || '-1');

        FootnotesTune.notes.splice(index - 1, 1);

        return true;
      });

      return supAdded || supRemoved;
    });

    /**
     * If sup element was added or removed, we need to update indices
     */
    if (shouldUpdateIndices) {
      this.updateIndices();
    }
  }

  /**
   * Updates notes indices
   */
  private updateIndices(): void {
    FootnotesTune.notes.forEach((note, i) => note.index = i + 1);
  }

  /**
   * Hydrate content passed on render
   *
   * @param content - Tool's content
   */
  private hydrate(content: HTMLElement): void {
    const sups = content.querySelectorAll(`sup[data-tune=${Note.dataAttribute}]`);

    sups.forEach((sup, i) => {
      const note = new Note(sup as HTMLElement, this.popover, this.data[i].id);

      note.index = parseInt(sup.textContent || '0');

      note.content = this.data[i].content;
      FootnotesTune.notes.push(note);
    });
  }
}

