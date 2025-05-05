import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ExampleTheme from './plugins/ExampleTheme';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { useLayoutEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

type RichTextViewerProps = {
  content: string; // JSON string
};

function UpdateContentPlugin({ content }: { content: string }) {
  const [editor] = useLexicalComposerContext();

  useLayoutEffect(() => {
    if (content) {
      editor.update(() => {
        console.log(content);
        const parsedState = editor.parseEditorState(content);
        editor.setEditorState(parsedState);
      });
    }
  }, [content, editor]);

  return null;
}

export default function RichTextViewer({ content }: RichTextViewerProps) {
  const initialConfig: InitialConfigType = {
    namespace: 'Viewer',
    theme: ExampleTheme,
    editable: false,
    onError(error) {
      throw error;
    },
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
      LinkNode,
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <UpdateContentPlugin content={content} />
      <RichTextPlugin
        contentEditable={
          <ContentEditable className='prose max-w-none text-sm text-gray-800 outline-none' />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
