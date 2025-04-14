import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LexicalEditor } from "lexical";
import type { BaseSelection } from 'lexical';
import type { EditorState } from 'lexical';
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  RangeSelection
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
  $isParentElementRTL,
  $isAtNodeEnd
} from "@lexical/selection";
import { mergeRegister } from "@lexical/utils";

import { createPortal } from "react-dom";


const LowPriority = 1;

function positionEditorElement(editor: HTMLElement, rect: DOMRect | null) {
  if (rect === null) {
    editor.style.opacity = "0";
    editor.style.top = "-1000px";
    editor.style.left = "-1000px";
  } else {
    editor.style.opacity = "1";
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${
      rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
    }px`;
  }
}

function FloatingLinkEditor({ editor }:{editor:LexicalEditor}) {
  const editorRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const mouseDownRef = useRef(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState<BaseSelection | null>(null);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      !nativeSelection?.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection?.anchorNode??null)
    ) {
      const domRange = nativeSelection?.getRangeAt(0);
      let rect=domRange?.getBoundingClientRect() ?? null;;
      if (nativeSelection?.anchorNode === rootElement) {
        let inner: HTMLElement = rootElement as HTMLElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild as HTMLElement;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange?.getBoundingClientRect() ?? null;
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }
      setLastSelection(selection);
    }  else if (!activeElement || (!activeElement.classList.contains("link-input") && !isEditMode)) {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl("");
    }

    return true;
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }:{editorState:EditorState}) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        LowPriority
      )
    );
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  return (
    <div
  ref={editorRef}
  className="absolute z-[100] top-[-10000px] left-[-10000px] mt-[-6px] w-full max-w-[300px] opacity-0 bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.3)] rounded-[8px] transition-opacity duration-500"
>
  {isEditMode ? (
    <input
      ref={inputRef}
      className="block w-[calc(100%-24px)] box-border m-2 px-3 py-2 rounded-[15px] bg-[#eee] text-[15px] text-[rgb(5,5,5)] border-0 outline-0 font-inherit"
      value={linkUrl}
      onChange={(event) => setLinkUrl(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          if (lastSelection !== null && linkUrl !== "") {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
          }
          setEditMode(false);
        } else if (event.key === "Escape") {
          event.preventDefault();
          setEditMode(false);
        }
      }}
    />
  ) : (
    <>
      <div className="block w-[calc(100%-24px)] box-border m-2 px-3 py-2 rounded-[15px] bg-[#eee] text-[15px] text-[rgb(5,5,5)] border-0 outline-0 font-inherit relative">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(33,111,219)] no-underline block whitespace-nowrap overflow-hidden text-ellipsis pr-[30px] hover:underline"
        >
          {linkUrl}
        </a>
        <div
          className="flex items-center absolute right-0 top-0 bottom-0 w-[35px] cursor-pointer"
          role="button"
          tabIndex={0}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setEditMode(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
            />
          </svg>
        </div>
      </div>
    </>
  )}
</div>

  );
}


function getSelectedNode(selection:RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}


export default function RichTextToolbar() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [isRTL, setIsRTL] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  
  

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsRTL($isParentElementRTL(selection));
      console.log(isRTL)
      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
    );
  }, [editor, updateToolbar]);


  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return (
    <div
  className="flex mb-px bg-white p-1 rounded-t-[10px] items-center"
  ref={toolbarRef}
>
  <button
    onClick={() => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
    }}
    className={`flex items-center rounded-[10px] p-2 cursor-pointer mr-[2px] ${isBold ? "bg-gray-200" : ""}`}
    aria-label="Format Bold"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M6.8 19V5h5.525q1.625 0 3 1T16.7 8.775q0 1.275-.575 1.963t-1.075.987q.625.275 1.388 1.025T17.2 15q0 2.225-1.625 3.113t-3.05.887zm3.025-2.8h2.6q1.2 0 1.463-.612t.262-.888t-.262-.887t-1.538-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425t.375-.95q0-.6-.425-.975t-1.1-.375H9.825z"/>
    </svg>
  </button>

  <button
    onClick={() => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
    }}
    className={`flex items-center rounded-[10px] p-2 cursor-pointer mr-[2px] ${isItalic ? "bg-gray-200" : ""}`}
    aria-label="Format Italics"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19z"/>
    </svg>
  </button>

  <button
    onClick={insertLink}
    className={`flex items-center rounded-[10px] p-2 cursor-pointer mr-[2px] ${isLink ? "bg-gray-200" : ""}`}
    aria-label="Insert Link"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M17 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6-3H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm14-1h-2q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12"/>
    </svg>
  </button>

  {isLink && createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
</div>

  );
}
