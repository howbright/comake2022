import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
//import classNames from 'classnames/bind'
import styles from "./TableEditor.module.scss";
import { IconButton } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';


const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    borderRadius: '9px'
  },
}));

function AddColumnBeforeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z" />
    </SvgIcon>
  );
}

function AddColumnAfterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z" />
    </SvgIcon>
  );
}

function DeleteColumnIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z" />
    </SvgIcon>
  );
}

function AddRowBeforeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z" />
    </SvgIcon>
  );
}

function AddRowAfterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z" />
    </SvgIcon>
  );
}

function DeleteRowIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z" />
    </SvgIcon>
  );
}

function MergeCellIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z" />
    </SvgIcon>
  );
}

function SplitCellIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 14H21V20H3V14H5V18H19V14M3 4V10H5V6H19V10H21V4H3M11 11V13H8V15L5 12L8 9V11H11M16 11V9L19 12L16 15V13H13V11H16Z" />
    </SvgIcon>
  );
}

function ToggleHeaderCellIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9,7V17H11V13H13V17H15V7H13V11H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
    </SvgIcon>
  );
}

function SetCellAttributeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11,7A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
    </SvgIcon>
  );
}

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`;

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const disable = "grey.400";
  const able = "black";
  return (
    <Box className={styles["table-inline-toolbar"]}>
      <BlackTooltip title="앞에 열 추가" arrow>
        <span className="cdx-settings-button">
          <AddColumnBeforeIcon
            sx={{ color: editor.can().addColumnBefore() ? able : disable }}
            onClick={() => editor.chain().focus().addColumnBefore().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="뒤에 열 추가" arrow>
        <span className="cdx-settings-button">
          <AddColumnAfterIcon
            sx={{ color: editor.can().addColumnAfter() ? able : disable }}
            onClick={() => editor.chain().focus().addColumnAfter().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="열 삭제" arrow>
        <span className="cdx-settings-button">
          <DeleteColumnIcon
            sx={{ color: editor.can().deleteColumn() ? able : disable }}
            onClick={() => editor.chain().focus().deleteColumn().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="위 행 추가" arrow>
        <span className="cdx-settings-button">
          <AddRowBeforeIcon
            sx={{ color: editor.can().addRowBefore() ? able : disable }}
            onClick={() => editor.chain().focus().addRowBefore().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="아래 행 추가" arrow>
        <span className="cdx-settings-button">
          <AddRowAfterIcon
            sx={{ color: editor.can().addRowAfter() ? able : disable }}
            onClick={() => editor.chain().focus().addRowAfter().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="행 삭제" arrow>
        <span className="cdx-settings-button">
          <DeleteRowIcon
            sx={{ color: editor.can().deleteRow() ? able : disable }}
            onClick={() => editor.chain().focus().deleteRow().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="셀 병합" arrow>
        <span className="cdx-settings-button">
          <MergeCellIcon
            sx={{ color: editor.can().mergeCells() ? able : disable }}
            onClick={() => editor.chain().focus().mergeCells().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="셀 분할" arrow>
        <span className="cdx-settings-button">
          <SplitCellIcon
            sx={{ color: editor.can().splitCell() ? able : disable }}
            onClick={() => editor.chain().focus().splitCell().run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="해더 셀 전환" arrow>
        <span className="cdx-settings-button">
          <ToggleHeaderCellIcon
            sx={{ color: editor.can().toggleHeaderCell() ? able : disable }}
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
          />
        </span>
      </BlackTooltip>
    </Box>
  );
};

export default (props) => {

  const [showToolBar, setShowToolBar] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      // Default TableCell
      TableCell,
      // Custom TableCell with backgroundColor attribute
      // CustomTableCell,
    ],
    // injectCSS: false,
    content: props.content,
  });

  const handleFocusIn = (e) => {
    setShowToolBar(true)
  }

  const handleFocusOut = (e) => {
    setShowToolBar(false)
  }

  return (
    <Box onMouseLeave={handleFocusOut} onMouseEnter={handleFocusIn}>
      {showToolBar && <MenuBar editor={editor} /> }
      <EditorContent
        className={styles.ProseMirror}
        editor={editor}
      />
    </Box>
  );
};
