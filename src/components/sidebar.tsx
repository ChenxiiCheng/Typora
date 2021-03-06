import Image from 'next/image';

import { useGearStatusStore } from '../global-stores/useGearStatusStore';

export default function SideBar() {
	const { setGearStatus } = useGearStatusStore();
	const handleGearClick = () => setGearStatus();

	return (
		<div className="relative h-screen px-4 bg-notion-yellow ">
			<div className="flex justify-between items-center pt-10">
				<span className="inline-block">
					<Image width="50px" height="50px" src="/md-icon.png" alt="icon" />
				</span>
				<span
					data-testid="gear-icon"
					className="inline-block rounded-lg text-slate-600 transition duration-500 ease-in-out hover:rotate-180 hover:text-slate-800 hover:cursor-pointer"
					onClick={handleGearClick}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</span>
			</div>
			<div className="flex flex-col my-9">
				<h1 className="mb-4 text-slate-500 font-medium">Welcome</h1>
				<span className="text-sm text-slate-700 hover:cursor-pointer hover:text-slate-900">
					Introduction
				</span>
			</div>
			<div className="flex flex-col my-10">
				<h1 className="mb-4 text-slate-500 font-medium">Reference</h1>
				<div className="flex flex-col space-y-5">
					<span className="text-sm text-slate-700 hover:cursor-pointer hover:text-slate-900">
						Charge Collection
					</span>
					<span className="text-sm text-slate-700 hover:cursor-pointer hover:text-slate-900">
						Charges
					</span>
					<span className="text-sm text-slate-700 hover:cursor-pointer hover:text-slate-900">
						Rates
					</span>
					<span className="text-sm text-slate-700 hover:cursor-pointer hover:text-slate-900">
						Currencies
					</span>
				</div>
			</div>
		</div>
	);
}
