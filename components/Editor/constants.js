import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
// import Image from '@editorjs/image'
// import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
// import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
// import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
// import InlineCode from '@editorjs/inline-code'
// import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  header: {
    class:Header,
    tunes: ['footNotes']
  },
  paragraph: {
    class: Paragraph,
    tunes: ['footNotes']
  }
}
