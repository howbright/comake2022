import ReactDOM from "react-dom";
import React, { Component } from "react";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";
import styles from "./ReactEditor.module.css";
import { OutputData } from "@editorjs/editorjs";
import { Button } from "@mui/material";
import FootnotesTune from "./plugin/footnotes/CustomFootnotes";
import {SimpleImage} from "./plugin/SimpleImage.js";
import SignatureTune from "./plugin/signature/SignatureTune";
import CheckboxTune from "./plugin/checkbox/CheckTune";

const ReactEditorJS = createReactEditorJS();

type MyProps = {
    // using `interface` is also ok
    onInitialize: (instance: any)=>void
  };

const TOOL = Object.assign(EDITOR_JS_TOOLS, {
  signature: SignatureTune,
  footnotes: FootnotesTune,
  check: CheckboxTune
})

export default class ReactEditor extends React.Component<MyProps> {
  render() {
    return (
      <ReactEditorJS
      readOnly={false}
      onInitialize={this.props.onInitialize}
        tools={TOOL}
        defaultValue={{
          time: 1635603431943,
          blocks: [
            {
              id: "sheNwCUP5A",
              type: "header",
              data: {
                text: "Editor.js",
                level: 2
              }
            },
            {
              id: "12iM3lqzcm",
              type: "paragraph",
              data: {
                text:
                  "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
            {id: 'asdfawefawer',
          type: "table",
          data: {
            html: "<table style=\"min-width: 100px;\"><colgroup><col><col><col><col></colgroup><tbody><tr><th colspan=\"1\" rowspan=\"1\">Name</th><th colspan=\"3\" rowspan=\"1\">Dedddddscription</th></tr><tr><td colspan=\"1\" rowspan=\"2\">Cyndi Lauper</td><td colspan=\"1\" rowspan=\"1\">singer</td><td colspan=\"1\" rowspan=\"1\">songwriter</td><td colspan=\"1\" rowspan=\"1\">actress</td></tr><tr><td colspan=\"1\" rowspan=\"1\">designer</td><td colspan=\"1\" rowspan=\"1\">developer</td><td colspan=\"1\" rowspan=\"1\">maker</td></tr><tr><td colspan=\"1\" rowspan=\"1\">Hans Pagel</td><td colspan=\"1\" rowspan=\"1\">wrote this</td><td colspan=\"2\" rowspan=\"1\">that’s it</td></tr></tbody></table>"
          }
        },
            {id: "awerawer",
             type: "table",
             data: {  
               html: `<table style="min-width: 100px;"><colgroup><col><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="3" rowspan="1"><p>Dedddddscription</p></th></tr><tr><td colspan="1" rowspan="2"><p>Cyndi Lauper</p></td><td colspan="1" rowspan="1"><p>singer</p></td><td colspan="1" rowspan="1"><p>songwriter</p></td><td colspan="1" rowspan="1"><p>actress</p></td></tr><tr><td colspan="1" rowspan="1"><p>designer</p></td><td colspan="1" rowspan="1"><p>developer</p></td><td colspan="1" rowspan="1"><p>maker</p></td></tr><tr><td colspan="1" rowspan="1"><p>Hans Pagel</p></td><td colspan="1" rowspan="1"><p>wrote this</p></td><td colspan="2" rowspan="1"><p>that’s it</p></td></tr></tbody></table>`
             }
          },
            {
              id: "12iM3lqzcmrt",
              type: "table",
              data: {
                html:
                `
                <table class="cdx-table">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th colspan="3">Dedddddscription</th>
                    </tr>
                    <tr>
                      <td rowspan="2">Cyndi Lauper</td>
                      <td>singer</td>
                      <td>songwriter</td>
                      <td>actress</td>
                    </tr>
                    <tr>
                      <td>designer</td>
                      <td>developer</td>
                      <td>maker</td>
                    </tr>
                    <tr>
                      <td>Hans Pagel</td>
                      <td>wrote this</td>
                      <td colspan="2">that’s it</td>
                    </tr>
                  </tbody>
                </table>
              `
              }
            },
            {
              id: "fvZGuFXHmK",
              type: "header",
              data: {
                text: "Key features",
                level: 3
              }
            },
            {
              id: "xnPuiC9Z8M",
              type: "list",
              data: {
                style: "unordered",
                items: [
                  {
                  content: "It is a block-styled editor",
                  items:[]
                },
                {
                  content:  "It returns clean data output in JSON",
                  items: []
                },
                {
                  content:   "Designed to be extendable and pluggable with a simple API",
                  items: []
                }
                ]
              }
            },
            {
              id: "-MhwnSs3Dw",
              type: "header",
              data: {
                text: "What does it mean «block-styled editor»",
                level: 3
              }
            },
            {
              id: "Ptb9oEioJn",
              type: "paragraph",
              data: {
                text:
                  'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
              }
            },
            {
              id: "-J7nt-Ksnw",
              type: "paragraph",
              data: {
                text:
                  'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
              }
            },
            {
              id: "SzwhuyoFq6",
              type: "header",
              data: {
                text: "What does it mean clean data output",
                level: 3
              }
            },
            {
              id: "x_p-xddPzV",
              type: "paragraph",
              data: {
                text:
                  "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
              }
            },
            {
              id: "6W5e6lkub-",
              type: "paragraph",
              data: {
                text:
                  'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
              }
            },
            {
              id: "eD2kuEfvgm",
              type: "paragraph",
              data: {
                text:
                  "Clean data is useful to sanitize, validate and process on the backend."
              }
            },
            {
              id: "N8bOHTfUCN",
              type: "delimiter",
              data: {}
            },
            {
              id: "IpKh1dMyC6",
              type: "paragraph",
              data: {
                text:
                  "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
            },
            {
              id: "FF1iyF3VwN",
              type: "image",
              data: {
                file: {
                  url: "https://codex.so/public/app/img/external/codex2x.png"
                },
                caption: "",
                withBorder: false,
                stretched: false,
                withBackground: false
              }
            },
            {
              id: "IpKh1dMysd",
              type: "paragraph",
              data: {
                text:
                  "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
            },
          ]
        }}
      />
    );
  }
}
