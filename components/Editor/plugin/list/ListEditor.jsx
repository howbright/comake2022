import { Box } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import BlackTooltip from "../BlackToolTip";
import styles from "./ListEditor.module.scss";
import React, { useState } from "react";

function IndentIncreaseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z" />
    </SvgIcon>
  );
}

function IndentDecreaseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z" />
    </SvgIcon>
  );
}

const DecimalList = OrderedList.extend({
  name: "decimalList",
});

const HalfBracedDecimalList = OrderedList.extend({
  name: "halfBracedDecimalList",
});

const BracedDecimalList = OrderedList.extend({
  name: "bracedDecimalList",
});

const CircledDecimalList = OrderedList.extend({
  name: "circledDecimalList",
});

const KoreanAList = OrderedList.extend({
  name: "koreanAList",
});

const KoreanCList = OrderedList.extend({
  name: "koreanCList",
});

const CircledKoreanList = OrderedList.extend({
  name: "circledKoreanList",
});

const AlphaLowerList = OrderedList.extend({
  name: "alphaLowerList",
});

const AlphaUpperList = OrderedList.extend({
  name: "alphaUpperList",
});

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const [showPallete, setShowPallete] = useState(false);

  const disable = "grey.400";
  const able = "black";

  return (
      <Box className={styles["table-inline-toolbar"]}>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("bulletList")
              ? editor.chain().focus().toggleBulletList().run()
              : "";
          }}
          sx={{ color: !editor.isActive("bulletList") ? able : disable }}
          disabled={true}
        >
          ●
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("decimalList")
              ? editor.chain().focus().toggleList("decimalList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("decimalList") ? able : disable }}
          disabled={true}
        >
          1
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("halfBracedDecimalList")
              ? editor.chain().focus().toggleList("halfBracedDecimalList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("halfBracedDecimalList") ? able : disable }}
          disabled={true}
        >
          1)
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("bracedDecimalList")
              ? editor.chain().focus().toggleList("bracedDecimalList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("bracedDecimalList") ? able : disable }}
          disabled={true}
        >
          (1)
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("circledDecimalList")
              ? editor.chain().focus().toggleList("circledDecimalList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("circledDecimalList") ? able : disable }}
          disabled={true}
        >
          ①
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("koreanAList")
              ? editor.chain().focus().toggleList("koreanAList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("koreanAList") ? able : disable }}
          disabled={true}
        >
          가
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("koreanCList")
              ? editor.chain().focus().toggleList("koreanCList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("koreanCList") ? able : disable }}
          disabled={true}
        >
          ㄱ
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("circledKoreanList")
              ? editor.chain().focus().toggleList("circledKoreanList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("circledKoreanList") ? able : disable }}
          disabled={true}
        >
          ㉠
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("alphaLowerList")
              ? editor.chain().focus().toggleList("alphaLowerList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("alphaLowerList") ? able : disable }}
          disabled={true}
        >
          a
        </Box>
        <Box
          className={"cdx-settings-button"}
          onClick={() => {
            !editor.isActive("alphaUpperList")
              ? editor.chain().focus().toggleList("alphaUpperList", "listItem").run()
              : "";
          }}
          sx={{ color: !editor.isActive("alphaUpperList") ? able : disable }}
          disabled={true}
        >
          A
        </Box>
        <BlackTooltip title="tab" arrow>
        <span className="cdx-settings-button">
          <IndentIncreaseIcon
            sx={{ color: editor.can().sinkListItem("listItem") ? able : disable }}
            onClick={() => editor.can().sinkListItem("listItem")? editor.chain().focus().sinkListItem("listItem").run(): ""}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="shift + tab" arrow>
        <span className="cdx-settings-button">
          <IndentDecreaseIcon
            sx={{ color: editor.can().liftListItem("listItem") ? able : disable }}
            onClick={() => editor.can().liftListItem("listItem") ? editor.chain().focus().liftListItem("listItem").run(): ""}
          />
        </span>
      </BlackTooltip>
      </Box>
  )
}

export default () => {

  const [showToolBar, setShowToolBar] = useState(false);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      BulletList,
      DecimalList.configure({
        HTMLAttributes: {
          class: "decimal",
        },
      }),
      HalfBracedDecimalList.configure({
        HTMLAttributes: {
          class: "half-braced-decimal",
        },
      }),
      CircledDecimalList.configure({
        HTMLAttributes: {
          class: "circled-decimal",
        },
      }),
      KoreanAList.configure({
        HTMLAttributes: {
          class: "korean-a",
        },
      }),
      BracedDecimalList.configure({
        HTMLAttributes: {
          class: "braced-decimal",
        },
      }),
      KoreanCList.configure({
        HTMLAttributes: {
          class: "korean-c",
        },
      }),
      CircledKoreanList.configure({
        HTMLAttributes: {
          class: "circled-korean",
        },
      }),
      AlphaLowerList.configure({
        HTMLAttributes: {
          class: "alpha-lower",
        },
      }),
      AlphaUpperList.configure({
        HTMLAttributes: {
          class: "alpha-upper",
        },
      }),
      ListItem,
    ],
    content: `
        <ol>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ol>
      `,
  });

  if (!editor) {
    return null;
  }

  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.stopPropagation();
    }
  };

  const handleFocusIn = (e) => {
    setShowToolBar(true)
  }

  const handleFocusOut = (e) => {
    setShowToolBar(false)
  }

  
  return (
    <Box onMouseLeave={handleFocusOut} onMouseEnter={handleFocusIn}>
    {showToolBar && <MenuBar editor={editor} /> }
      <EditorContent editor={editor} onKeyDown={onKeyDown} />
    </Box>
  );
};
