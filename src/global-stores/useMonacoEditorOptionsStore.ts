import create from 'zustand';
import { combine } from 'zustand/middleware';

type MonacoEditorOptionsStore = {
	editorType: 'monaco';
	theme: string;
	language: 'markdown' | 'javascript' | 'typescript';
	// 便捷器右侧预览小图
	minimap: boolean;
	// 右侧竖向滚动条
	verticalScrollbar: 'auto' | 'visible' | 'hidden';
	verticalScrollbarSize: number;
	// 底部横向滚动条
	horizontalScrollbar: 'auto' | 'visible' | 'hidden';
	horizontalScrollbarSize: number;
	// 是否显示行号
	lineNumbers: 'on' | 'off' | 'relative';
	// 是否隐藏左侧缩进
	folding: boolean;
	fontSize: number;
	// 左侧缩进
	lineDecorationsWidth: number;
	// 选中行的outline
	renderLineHighlight: 'none' | 'gutter' | 'line' | 'all';
	cursorBlinking: 'blink' | 'smooth' | 'phase' | 'expand' | 'solid';
	cursorStyle:
		| 'line'
		| 'block'
		| 'underline'
		| 'line-thin'
		| 'block-outline'
		| 'underline-thin';
};

export const useMonacoEditorOptionsStore = create(
	combine(
		{
			editorType: 'monaco',
			theme: 'vs-light',
			language: 'markdown',
			minimap: false,
			verticalScrollbar: 'hidden',
			verticalScrollbarSize: 0,
			horizontalScrollbar: 'hidden',
			horizontalScrollbarSize: 0,
			lineNumbers: 'off',
			folding: false,
			fontSize: 15,
			lineDecorationsWidth: 0,
			renderLineHighlight: 'none',
			cursorBlinking: 'smooth',
			cursorStyle: 'block-outline',
		} as MonacoEditorOptionsStore,
		(set, get) => ({
			setMonacoEditorOptions: (
				newOptions: Partial<MonacoEditorOptionsStore>
			) => {
				set({ ...get(), ...newOptions });
			},
		})
	)
);
