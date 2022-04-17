import monaco from 'monaco-editor';
import ReactMonacoEditor from '@monaco-editor/react';

import { useMarkdownContentStore } from '../global-stores/useMarkdownContentStore';
import { useMonacoEditorOptionsStore } from '../global-stores/useMonacoEditorOptionsStore';

export default function MonacoEditor() {
	const { setMarkdownContent } = useMarkdownContentStore();
	const { setMonacoEditorOptions, ...monacoEditorOptions } =
		useMonacoEditorOptionsStore();

	function handleMonacoEditorChange(
		value: string | undefined,
		event: monaco.editor.IModelContentChangedEvent
	) {
		setMarkdownContent(value ?? '');
	}

	return (
		<ReactMonacoEditor
			height="100%"
			width="100%"
			language={monacoEditorOptions.language}
			onChange={handleMonacoEditorChange}
			options={{
				cursorStyle: monacoEditorOptions.cursorStyle,
				cursorBlinking: monacoEditorOptions.cursorBlinking,
				minimap: {
					enabled: monacoEditorOptions.minimap,
				},
				lineNumbers: monacoEditorOptions.lineNumbers,
				fontSize: monacoEditorOptions.fontSize,
				folding: monacoEditorOptions.folding,
				lineDecorationsWidth: monacoEditorOptions.lineDecorationsWidth,
				renderLineHighlight: monacoEditorOptions.renderLineHighlight,
				scrollbar: {
					vertical: monacoEditorOptions.verticalScrollbar,
					verticalScrollbarSize: monacoEditorOptions.verticalScrollbarSize,
				},
			}}
		/>
	);
}
