import { useMarkdownContentStore } from '../global-stores/useMarkdownContentStore';

export default function Textarea() {
	const { markdownContent, setMarkdownContent } = useMarkdownContentStore();

	function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setMarkdownContent(event.target.value);
	}

	return (
		<textarea
			className="w-full h-full focus:outline-none"
			value={markdownContent}
			onChange={handleTextChange}
		/>
	);
}
