
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import ExampleTheme from "./plugins/ExampleTheme";
import RichTextToolbar from "./RichTextToolbar";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { EditorState } from "lexical";






type RichTexteditorProps = {
  onChange: (editorState: EditorState) => void;
  initialValue?: string
};


export default function RichTexteditor({ onChange,initialValue }: RichTexteditorProps) {
  
  const editorConfig = {
    namespace: "MyEditor",
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  editorState: initialValue || undefined,
  onError(error:Error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};
  
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative text-left font-normal text-black rounded-t-[10px] leading-5">
        <RichTextToolbar />
        <div className="relative bg-white">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[150px] resize-none text-[15px] caret-[#444] tab-[1] relative outline-none px-[10px] py-[15px]" />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
}
