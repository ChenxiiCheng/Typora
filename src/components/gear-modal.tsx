import { useForm } from 'react-hook-form';

import { useGearStatusStore } from '../global-stores/useGearStatusStore';
import { useMonacoEditorOptionsStore } from '../global-stores/useMonacoEditorOptionsStore';

type FormData = {
	language: 'markdown' | 'javascript' | 'typescript';
	minimap: boolean;
	lineNumbers: 'on' | 'off' | 'relative';
	cursorBlinking: 'smooth' | 'blink' | 'phase' | 'expand' | 'solid';
	cursorStyle:
		| 'line'
		| 'block-outline'
		| 'block'
		| 'underline'
		| 'line-thin'
		| 'underline-thin';
};

type FilteredFormData = {
	[key: string]: boolean | string;
};

export default function GearModal({ className }: { className: string }) {
	const { register, handleSubmit } = useForm<FormData>();
	const { setGearStatus } = useGearStatusStore();
	const { setMonacoEditorOptions, ...editorConfig } =
		useMonacoEditorOptionsStore();

	const handleFormSubmit = (data: FormData) => {
		const filteredData: FilteredFormData = {};
		Object.entries(data).forEach(([key, value]) => {
			if (!!value) {
				filteredData[key] = value;
			}
		});
		setMonacoEditorOptions(filteredData);
	};

	console.log('editorConfig = ', editorConfig);

	const handleCancel = () => setGearStatus();

	return (
		<>
			<div className={className}>
				<header className="text-2xl font-bold text-slate-600 text-center">
					Editor Settings
				</header>
				<form
					className="mt-5 divide-y divide-slate-100"
					onSubmit={handleSubmit(handleFormSubmit)}
				>
					<div className="pb-3">
						<h1 className="text-base font-medium text-slate-700">Language</h1>
						<section className="flex flex-start items-center space-x-4">
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="markdown"
							>
								<span>Markdown</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="markdown"
									type="radio"
									defaultChecked={
										editorConfig.language === 'markdown' ? true : false
									}
									{...register('language')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="javascript"
							>
								<span>JavaScript</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="javascript"
									type="radio"
									defaultChecked={
										editorConfig.language === 'javascript' ? true : false
									}
									{...register('language')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="typescript"
							>
								<span>TypeScript</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="typescript"
									type="radio"
									defaultChecked={
										editorConfig.language === 'typescript' ? true : false
									}
									{...register('language')}
								/>
							</label>
						</section>
					</div>
					<div className="py-3 space-x-5">
						<label
							className="inline-flex items-center my-2 space-x-2 text-base font-medium text-slate-700"
							htmlFor="minimap"
						>
							<span>Show mini map</span>
							<input
								className="w-5 h-5 border-gray-200 accent-slate-600"
								id="minimap"
								type="checkbox"
								value="minimap"
								defaultChecked={editorConfig.minimap ?? false}
								{...register('minimap')}
							/>
						</label>
						<label
							className="inline-flex items-center my-2 space-x-2 text-base font-medium text-slate-700"
							htmlFor="lineNumbers"
						>
							<span>Show line number</span>
							<input
								className="w-5 h-5 border-gray-200 accent-slate-600"
								id="lineNumbers"
								type="checkbox"
								value="lineNumbers"
								defaultChecked={editorConfig.lineNumbers ? true : false}
								{...register('lineNumbers')}
							/>
						</label>
					</div>
					<div className="py-3">
						<h1 className="text-base font-medium text-slate-700">
							Cursor Blinking
						</h1>
						<section className="flex flex-start items-center space-x-4">
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="blink"
							>
								<span>Blink</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="blink"
									type="radio"
									value="blink"
									defaultChecked={
										editorConfig.cursorBlinking === 'blink' ? true : false
									}
									{...register('cursorBlinking')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="smooth"
							>
								<span>Smooth</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="smotth"
									type="radio"
									value="smooth"
									defaultChecked={
										editorConfig.cursorBlinking === 'smooth' ? true : false
									}
									{...register('cursorBlinking')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="phase"
							>
								<span>Phase</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="phase"
									type="radio"
									value="phase"
									defaultChecked={
										editorConfig.cursorBlinking === 'phase' ? true : false
									}
									{...register('cursorBlinking')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="expand"
							>
								<span>Expand</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="expand"
									type="radio"
									value="expand"
									defaultChecked={
										editorConfig.cursorBlinking === 'expand' ? true : false
									}
									{...register('cursorBlinking')}
								/>
							</label>
							<label
								className="flex items-center my-2 space-x-2 text-sm text-slate-600"
								htmlFor="solid"
							>
								<span>Solid</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="solid"
									type="radio"
									value="solid"
									defaultChecked={
										editorConfig.cursorBlinking === 'solid' ? true : false
									}
									{...register('cursorBlinking')}
								/>
							</label>
						</section>
					</div>
					<div className="py-3">
						<h1 className="text-base font-medium text-slate-700">
							Cursor Style
						</h1>
						<section className="flex flex-wrap flex-start items-center">
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="line"
							>
								<span>Line</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="line"
									type="radio"
									value="line"
									defaultChecked={
										editorConfig.cursorStyle === 'line' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="block"
							>
								<span>Block</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="block"
									type="radio"
									value="block"
									defaultChecked={
										editorConfig.cursorStyle === 'block' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="underline"
							>
								<span>Underline</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="underline"
									type="radio"
									value="underline"
									defaultChecked={
										editorConfig.cursorStyle === 'underline' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="line-thin"
							>
								<span>Line-thin</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="line-thin"
									type="radio"
									value="line-thin"
									defaultChecked={
										editorConfig.cursorStyle === 'line-thin' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="block-outline"
							>
								<span>Block-outline</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="block-outline"
									type="radio"
									value="block-outline"
									defaultChecked={
										editorConfig.cursorStyle === 'block-outline' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
							<label
								className="flex items-center my-2 mr-2 space-x-2 text-sm text-slate-600"
								htmlFor="underline-thin"
							>
								<span>Underline-thin</span>
								<input
									className="w-5 h-5 border-gray-200 accent-slate-600"
									id="underline-thin"
									type="radio"
									value="underline-thin"
									defaultChecked={
										editorConfig.cursorStyle === 'underline-thin' ? true : false
									}
									{...register('cursorStyle')}
								/>
							</label>
						</section>
					</div>
					<div className="pt-6 space-x-5 text-right">
						<button
							className="px-8 py-2.5 text-sm font-medium border border-slate-50 bg-slate-50 text-slate-500 rounded-lg shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:bg-rose-400 focus:ring focus:ring-rose-300 focus:outline-none"
							onClick={handleCancel}
						>
							Cancel
						</button>
						<button className="px-8 py-2.5 text-sm font-medium bg-slate-50 text-slate-500 rounded-lg shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:bg-slate-500 focus:ring focus:ring-slate-400 focus:outline-none">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
