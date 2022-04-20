/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import { Resizable, ResizeCallback } from 're-resizable';

import GearModal from '../components/gear-modal';
import SiderBar from '../components/sidebar';
import MonacoEditor from '../components/monaco-editor';
import Textarea from '../components/textarea';
import MarkdownParser from '../components/markdown-parser';

import { useEditorTypeStore } from '../global-stores/useEditorTypeStore';
import { useMonacoEditorOptionsStore } from '../global-stores/useMonacoEditorOptionsStore';
import { useGearStatusStore } from '../global-stores/useGearStatusStore';
import { useSidebarWidthStore } from '../global-stores/useSidebarWidthStore';

const Home: NextPage = () => {
	const { editorType } = useEditorTypeStore();
	const { gearStatus } = useGearStatusStore();
	const { setMonacoEditorOptions, ...monacoEditorOptions } =
		useMonacoEditorOptionsStore();
	const { width, defaultWidth, minWidth, maxWidth, setWidth } =
		useSidebarWidthStore();

	const handleResize: ResizeCallback = (e, direction, ref, d) =>
		setWidth(width + d.width);

	const editorTheme = () => {
		const darkThemes = ['vs-dark'];
		if (darkThemes.includes(monacoEditorOptions.theme)) {
			return true;
		}
	};

	return (
		<div>
			<Head>
				<title>Online Markdown Tool</title>
				<meta name="description" content="Online markdown tool" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="relative grid grid-rows-flow sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 h-screen">
				{/* Overlay */}
				{gearStatus ? (
					<div className="absolute inset-0 w-full h-full z-10 bg-black opacity-40"></div>
				) : null}

				{/* Gear Modal */}
				{gearStatus ? (
					<GearModal className="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-20 px-10 py-8 min-w-fit min-h-fit border border-slate-200 bg-white rounded-xl shadow-md" />
				) : null}

				{/* Left Sidebar */}
				<Resizable
					minWidth={minWidth}
					maxWidth={maxWidth}
					defaultSize={{ height: '100%', width: defaultWidth }}
					size={{ width, height: '100%' }}
					onResizeStop={handleResize}
					style={{
						transition: 'all 0.3s ease-out',
					}}
					className="hidden lg:block lg:col-span-1 bg-mi-yellow z-10"
				>
					<SiderBar />
				</Resizable>

				{/* Monaco Editor / Textarea */}
				<div
					className={`col-span-1 lg:col-span-3 sm:border-b sm:border-slate-200 sm:border-r-0 md:col-span-3 px-8 py-14 md:border-r border-slate-100 z-0 ${
						editorTheme() ? 'bg-vs-dark' : 'bg-white'
					}`}
				>
					{editorType === 'textarea' ? <Textarea /> : <MonacoEditor />}
				</div>

				{/* Markdown Preview */}
				<div className="col-span-1 lg:col-span-3 px-8 py-14 prose prose-slat">
					<MarkdownParser />
				</div>
			</main>
		</div>
	);
};

export default Home;
