import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import { default as React } from 'react'


const DecimalOrderedList = OrderedList.extend({
    name: 'decimalList',
  });

 

export default () => {
   

  const editor = useEditor({
    extensions: [Document, Paragraph, Text, BulletList, DecimalOrderedList.configure({
        HTMLAttributes: {
          class: 'korean',
        },
      }), 
        OrderedList.configure({
        HTMLAttributes: {
          class: 'alpha',
        },
      })
        , ListItem],
    content: `
        <ol>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ol>
      `,
  })

  if (!editor) {
    return null
  }

  const onKeyDown = (e) => {
      if(e.key === 'Tab') {
          e.stopPropagation();
      }
  }

  return (
     <>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
        disabled={editor.isActive('bulletList')}
      >
        toggleBulletList
      </button>
      <button
        onClick={() => editor.chain().focus().toggleList('decimalList', 'listItem').run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        toggleOrderedList
      </button>
      <button
        onClick={() => editor.chain().focus().splitListItem('listItem').run()}
        disabled={!editor.can().splitListItem('listItem')}
      >
        splitListItem
      </button>
      <button
        onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
        disabled={!editor.can().sinkListItem('listItem')}
      >
        sinkListItem
      </button>
      <button
        onClick={() => editor.chain().focus().liftListItem('listItem').run()}
        disabled={!editor.can().liftListItem('listItem')}
      > liftListItem
      </button>
    <button
        onClick={(e) => {
            editor.chain().focus().toggleList('orderedList', 'listItem').run()
            // editor.chain().focus().circledAlphaType().run();
            // e.defaultPrevented;
            // console.log(e.target);
            // var el = document.querySelector(".ce-block--focused");
            // var ol = el.getElementsByTagName('ol')
            // if(ol.length >0) {
            //     ol[0].setAttribute('data-list-style-type','circled-alpha');
            //     ol[0].style.listStyleType = 'circled-alpha';
            // }
            // e.stopPropagation();
        
            //ol[0].style.listStyle = 'decimal'
            //console.log(ol)
            
        }}
      >바꾸기</button>
       

      <EditorContent editor={editor} onKeyDown={onKeyDown} />
    </>
  )
}