import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight"
import Underline from '@tiptap/extension-underline'
//import classNames from 'classnames/bind'
import styles from "./TableEditor.module.scss";
import { IconButton } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { ConstructionOutlined } from "@mui/icons-material";
import { relative } from "path";


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

function SetTextAlignLeftIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
    </SvgIcon>
  );
}

function SetTextAlignCenterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" />
    </SvgIcon>
  );
}

function SetTextAlignRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />
    </SvgIcon>
  );
}

function SetVerticalAlignTopIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z" />
    </SvgIcon>
  );
}

function SetVerticalAlignCenterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8,19H11V23H13V19H16L12,15L8,19M16,5H13V1H11V5H8L12,9L16,5M4,11V13H20V11H4Z" />
    </SvgIcon>
  );
}

function SetVerticalAlignBottomIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z" />
    </SvgIcon>
  );
}

function SetTextBoldIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
    </SvgIcon>
  );
}

function SetItalicIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
    </SvgIcon>
  );
}

function SetMarkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16" />
    </SvgIcon>
  );
}

function SetUnderlindIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
    </SvgIcon>
  );
}

function FontSizeUpIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,7L13,12.07L14.41,13.5L17,10.9V17H19V10.9L21.59,13.5L23,12.07L18,7Z" />
    </SvgIcon>
  );
}

function FontSizeDownIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z" />
    </SvgIcon>
  );
}

function FillIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z" />
    </SvgIcon>
  );
}



const CustomTableAlignCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: 'white',
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
      verticalAlign: {
        default: 'center',
        parseHTML: (element) => element.getAttribute("data-vertical-align"),
        renderHTML: (attributes) => {
          return {
            "data-vertical-align": attributes.verticalAlign,
            style: `vertical-align: ${attributes.verticalAlign}`,
          };
        },
      },
      fontSize: {
        default: '1rem',
        parseHTML: (element) => element.getAttribute("data-font-size"),
        renderHTML: (attributes) => {
          return {
            "data-font-size": attributes.fontSize,
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
      fontStretch: {
        default: '100%',
        parseHTML: (element) => element.getAttribute("data-font-stretch"),
        renderHTML: (attributes) => {
          return {
            "data-font-stretch": attributes.fontStretch,
            style: `font-stretch: ${attributes.fontStretch}`,
          };
        },
      },
    };
  },
});



const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const [showPallete, setShowPallete] = useState(false);

  const disable = "grey.400";
  const able = "black";

  const renderPallete = () => {
    if (showPallete) {
      return (
      <Box sx={{position:"absolute", display:"flex", alignContent:"center", justifyContent: "center" ,zIndex:10, top:0, left:30, backgroundColor: "white", width:'90px', height: '35px', boxShadow:2}}>
         <form role="form">
        <div className="form-group" style={{paddingLeft:'5px', width:'100%', height:'100%',  display:"flex", alignItems:"center", alignContent:"center", justifyItems: "stretch"}}>
          <input type="radio" name="cor" id="cor1" className={styles['cor1'] + " " +styles["cinput"]} value="#fffff" onChange={(e) =>  {editor.chain().focus().setCellAttribute('backgroundColor', e.target.value).run(); setShowPallete(!showPallete)}}/>
          <label htmlFor="cor1" className={styles['cor1'] + " " +  styles['clabel']} ></label>
          <input type="radio" name="cor" id="cor2"  value="#f5f5f5" className={styles['cor2'] + " " +styles["cinput"]} onChange={(e) =>  {editor.chain().focus().setCellAttribute('backgroundColor', e.target.value).run(); setShowPallete(!showPallete)}}/>
          <label htmlFor="cor2" className={styles['cor2'] + " " +  styles['clabel']}></label>
          <input type="radio" name="cor" id="cor3"  value="#e3f2fd" className={styles['cor3'] + " " +styles["cinput"]} onChange={(e) =>  {editor.chain().focus().setCellAttribute('backgroundColor', e.target.value).run(); setShowPallete(!showPallete)}}/>
          <label htmlFor="cor3" className={styles['cor3'] + " " +  styles['clabel']}></label>
          <input type="radio" name="cor" id="cor4" value="#fff8e1" className={styles['cor4'] + " " +styles["cinput"]} onChange={(e) =>  {editor.chain().focus().setCellAttribute('backgroundColor', e.target.value).run(); setShowPallete(!showPallete)}}/>
          <label htmlFor="cor4" className={styles['cor4'] + " " +  styles['clabel']}></label>
          {/* <input type="radio" name="cor" id="cor5" class="cinput" value="#7AE7BF" />
          <label for="cor5" class="cor5, clabel"></label>
          <input type="radio" name="cor" id="cor6" class="cinput" value="#51B749" />
          <label for="cor6" class="cor6, clabel"></label>
          <input type="radio" name="cor" id="cor7" class="cinput" value="#FBD75B" />
          <label for="cor7" class="cor7, clabel"></label>
          <input type="radio" name="cor" id="cor8" class="cinput" value="#FFB878" />
          <label for="cor8" class="cor8, clabel"></label>
          <input type="radio" name="cor" id="cor9" class="cinput" value="#FF887C" />
          <label for="cor9" class="cor9, clabel"></label>
          <input type="radio" name="cor" id="cor10" class="cinput" value="#DC2127" />
          <label for="cor10" class="cor10, clabel"></label>
          <input type="radio" name="cor" id="cor11" class="cinput" value="#DBADFF" />
          <label for="cor11" class="cor11, clabel"></label>
          <input type="radio" name="cor" id="cor12" class="cinput" value="#E1E1E1" />
          <label for="cor12" class="cor12, clabel"></label> */}
        </div>
    </form>
        </Box>);
    } else {
      return <></>;
    }
  }

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
      {/* <BlackTooltip title="해더 셀 전환" arrow>
        <span className="cdx-settings-button">
          <ToggleHeaderCellIcon
            sx={{ color: editor.can().toggleHeaderCell() ? able : disable }}
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
          />
        </span>
      </BlackTooltip> */}
      <BlackTooltip title="왼쪽 정렬" arrow>
        <span className="cdx-settings-button">
          <SetTextAlignLeftIcon
            onClick={() => editor.commands.setTextAlign('left')}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="가운데 정렬" arrow>
        <span className="cdx-settings-button">
          <SetTextAlignCenterIcon
            onClick={() => editor.commands.setTextAlign('center')}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="오른쪽 정렬" arrow>
        <span className="cdx-settings-button">
          <SetTextAlignRightIcon
            onClick={() => editor.commands.setTextAlign('right')}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="위로 정렬" arrow>
        <span className="cdx-settings-button">
          <SetVerticalAlignTopIcon
            onClick={() => editor.chain().focus().setCellAttribute('verticalAlign', 'top').run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="가운데 정렬" arrow>
        <span className="cdx-settings-button">
          <SetVerticalAlignCenterIcon
            onClick={() => editor.chain().focus().setCellAttribute('verticalAlign', 'middle').run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="아래 정렬" arrow>
        <span className="cdx-settings-button">
          <SetVerticalAlignBottomIcon
            onClick={() => editor.chain().focus().setCellAttribute('verticalAlign', 'bottom').run()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="굵게" arrow>
        <span className="cdx-settings-button">
          <SetTextBoldIcon
            onClick={() => editor.commands.toggleBold()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="이텔릭" arrow>
        <span className="cdx-settings-button">
          <SetItalicIcon
            onClick={() => editor.commands.toggleItalic()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="밑줄" arrow>
        <span className="cdx-settings-button">
          <SetUnderlindIcon
            onClick={() => editor.commands.toggleUnderline()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="하이라이트" arrow>
        <span className="cdx-settings-button">
          <SetMarkIcon sx={{fontSize: 16}}
            onClick={() => editor.commands.toggleHighlight()}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="글자 크게" arrow>
        <span className="cdx-settings-button">
          <FontSizeUpIcon
            onClick={(e) => {
              let attr = editor.getAttributes('tableCell');
              let fontSize = attr['fontSize'];
              let fontSizeNum = Number(fontSize.substr(0, fontSize.length-3));
              let newFont = fontSizeNum + 0.063;
              editor.chain().focus().setCellAttribute('fontSize', newFont + 'rem').run()
          
          }}
          />
        </span>
      </BlackTooltip>
      <BlackTooltip title="글자 작게" arrow>
        <span className="cdx-settings-button">
          <FontSizeDownIcon
            onClick={(e) => {
              let attr = editor.getAttributes('tableCell');
              let fontSize = attr['fontSize'];
              let fontSizeNum = Number(fontSize.substr(0, fontSize.length-3));
              let newFont = fontSizeNum - 0.063;
              editor.chain().focus().setCellAttribute('fontSize', newFont + 'rem').run()
          
          }}
          />
        </span>
      </BlackTooltip>
        <span className="cdx-settings-button" style={{position: "relative"}}>
          <FillIcon
            onClick={(e, current) => {
              var ele = document.getElementsByName('cor');
              let attr = editor.getAttributes('tableCell');
              let color = attr['backgroundColor'];
              for(let i = 0; i < ele.length; i++) {
                console.log(color)
                console.log(ele[i].value)
                console.log("****")
                if (color === ele[i].value){
                  ele[i].checked = true;
                } else {
                  ele[i].checked = false;
                }
              }
              setShowPallete(!showPallete);
          }}
          />
          {
            renderPallete()
          }
        </span>
    </Box>
  );
};

export default (props) => {

  const [showToolBar, setShowToolBar] = useState(false);
  const editor = useEditor({
    extensions: [
      Underline,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'table'],
      }),
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      // Default TableCell
      CustomTableAlignCell,
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
