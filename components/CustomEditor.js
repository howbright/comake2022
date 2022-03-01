import { createReactEditorJS } from 'react-editor-js'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from './layout';
import EditorJS from '@editorjs/editorjs';
// import NestedList from '@editorjs/nested-list';
import Header from '@editorjs/header';
import FootnotesTune from '@editorjs/footnotes';



const ReactEditorJS= createReactEditorJS()






const CustomEditor = () => {
    const EDITOR_JS_TOOLS = {
            tools: { 
              paragraph: {
                tunes: ['footnotes'], // note that stirng here should be the same as tools object key for Tune  
              },
              header: {
              class: Header,
              config: {
                placeholder: 'Enter a header',
                levels: [2, 3, 4],
                defaultLevel: 3
              },
              tunes: ['footnotes'],
            },
            footnotes: {
              class: FootnotesTune,
              config: {
                placeholder: 'Your placeholder for footnotes popover',
                shortcut: 'CMD+SHIFT+F',
              },
            }
          }
          
       
    }

    // Editor.js This will show block editor in component
    // pass EDITOR_JS_TOOLS in tools props to configure tools with editor.js
    return <ReactEditorJS defaultValue={blocks} tools={EDITOR_JS_TOOLS} />
}

 // Return the CustomEditor to use by other components.                    
                     
export default CustomEditor