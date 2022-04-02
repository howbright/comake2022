import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
// import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
// import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import Quote from '@itech-indrustries/quote'
import Marker from '@editorjs/marker'
import Delimiter from '@editorjs/delimiter'
import AlignmentTuneTool  from 'editorjs-text-alignment-blocktune';
import InlineCode from '@editorjs/inline-code';
import {TipTapTable} from './plugin/table/TipTapTable'
import {TipTapList} from './plugin/list/TipTapList'
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import ColorPlugin from  'editorjs-text-color-plugin';
import Underline from '@editorjs/underline';
//import List from 'editorjs-list'

export const EDITOR_JS_TOOLS = {
  underline: Underline,
  quote: Quote,
  marker: Marker,
  header: {
    class:Header,
    config: {
      placeholder: '제목을 입력하세요.  예) 제1조 (사업개요)',
      levels: [1, 2, 3, 4],
      defaultLevel: 3,
    },
    tunes: ['alignment']
  },
  paragraph: {
    class: Paragraph,
    config: {
      preserveBlank: true,
      placeholder: '계약서의 내용을 입력하세요..'
    },
    tunes: ['alignment', 'footnotes']
  },
  delimiter: Delimiter,
  alignment: AlignmentTuneTool,
  inlineCode: InlineCode,
  image: Image,
  table: {
    class: TipTapTable,
    inlineToolbar: false,
    tunes: ['footnotes']
  },
  list: {
    class: TipTapList,
    tunes: ['footnotes'],
    inlineToolbar: true
  },
  checkList: {
    class: Checklist,
    tunes: ['footnotes'],
    inlineToolbar: true
  },
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
       colorCollections: ['#FF1300','#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
       defaultColor: '#FF1300',
       type: 'text', 
    }     
  },
}
