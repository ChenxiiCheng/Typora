/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';

import MonacoEditor from '../components/monaco-editor';
import Textarea from '../components/textarea';
import MarkdownParser from '../components/markdown-parser';

import { useEditorTypeStore } from '../global-stores/useEditorTypeStore';

const Home: NextPage = () => {
	const { editorType } = useEditorTypeStore();

	return (
		<div>
			<Head>
				<title>Online Markdown Tool</title>
				<meta name="description" content="Online markdown tool" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="grid grid-cols-2 grid-rows-flow h-screen">
				{/* Left Side */}
				<div className="p-5">
					{editorType === 'textarea' ? <Textarea /> : <MonacoEditor />}
				</div>
				{/* Right Side */}
				<div className="p-5 bg-slate-50 prose prose-slat">
					<MarkdownParser />
				</div>
			</main>
		</div>
	);
};

export default Home;
