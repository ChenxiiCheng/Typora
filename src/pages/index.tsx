/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';

import SiderBar from '../components/sidebar';
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
			<main className="grid grid-rows-flow sm:grid-cols-1 md:grid-cols-7 h-screen">
				{/* Left Side */}
				<div className="hidden md:block md:col-span-1 max-w-[250px] pl-5 bg-slate-50">
					<SiderBar />
				</div>
				{/* Mid Side */}
				<div className="col-span-1 sm:border-b sm:border-slate-200 sm:border-r-0 md:col-span-3 px-8 py-14 md:border-r border-slate-100">
					{editorType === 'textarea' ? <Textarea /> : <MonacoEditor />}
				</div>
				{/* Right Side */}
				<div className="col-span-1 md:col-span-3 px-8 py-14 prose prose-slat">
					<MarkdownParser />
				</div>
			</main>
		</div>
	);
};

export default Home;
