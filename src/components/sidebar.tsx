import Image from 'next/image';

export default function SideBar() {
	return (
		<>
			<span className="inline-block mt-10">
				<Image width="50px" height="50px" src="/md-icon.png" alt="icon" />
			</span>
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
		</>
	);
}
