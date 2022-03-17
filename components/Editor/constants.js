import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
// import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
// import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
// import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
// import InlineCode from '@editorjs/inline-code'
import AlignmentTuneTool  from 'editorjs-text-alignment-blocktune';
import InlineCode from '@editorjs/inline-code';
import {TipTapTable} from './plugin/table/TipTapTable'
import NestedList from '@editorjs/nested-list';

export const EDITOR_JS_TOOLS = {
  // embed: Embed,
  // table: Table,
  marker: Marker,
  header: {
    class:Header,
    // tunes: ['signature','footnotes','check', 'alignment']
  },
  paragraph: {
    class: Paragraph,
    tunes: ['alignment', 'footnotes']
  },
  delimiter: Delimiter,
  alignment: AlignmentTuneTool,
  inlineCode: InlineCode,
  // image: Image
  table: {
    class: TipTapTable,
    inlineToolbar: true
  },
  nestedList: NestedList
}
