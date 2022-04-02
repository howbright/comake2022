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
              id: 'asdf',
              type: "table",
              data: {
                html: 
                `
                <table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td style="text-align:center">항목</td>
			<td style="text-align:center">내용</td>
		</tr>
		<tr>
			<td style="text-align:center">연봉 / 월&middot;일&middot;시급</td>
			<td style="text-align:center">00,000,000 원(원천징수세액 및 4대보험 공제 전)</td>
		</tr>
		<tr>
			<td style="text-align:center">상여금</td>
			<td style="text-align:center">00,000,000 원(또는 상여금 산정기준)</td>
		</tr>
		<tr>
			<td style="text-align:center">기타급여 (제수당)</td>
			<td style="text-align:center">0,000,000 원(또는 지급기준)</td>
		</tr>
		<tr>
			<td style="text-align:center">임금지급일</td>
			<td style="text-align:center">매월 00일(휴일인 경우, 그 직전 영업일에 지급)</td>
		</tr>
		<tr>
			<td style="text-align:center">지급방법 / 지급계좌</td>
			<td style="text-align:center">&nbsp;</td>
		</tr>
	</tbody>
</table>
                `
              }
            },
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
                  `<p>주소:&nbsp;<br />
                  대표이사:&nbsp;</p>`
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
                      <td>Name</td>
                      <td colspan="3">Dedddddscription</td>
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
            // {
            //   id: "xnPuiC9Z8M",
            //   type: "list",
            //   data: {
            //     style: "unordered",
            //     items: [
            //       {
            //       content: "It is a block-styled editor",
            //       items:[]
            //     },
            //     {
            //       content:  "It returns clean data output in JSON",
            //       items: []
            //     },
            //     {
            //       content:   "Designed to be extendable and pluggable with a simple API",
            //       items: []
            //     }
            //     ]
            //   }
            // },
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
