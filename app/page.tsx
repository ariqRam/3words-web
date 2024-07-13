import Image from "next/image";

export default function Home() {
	return (
		<main className="m-2 bg-primary border-none rounded-[30px] flex place-content-between">
			<div className="w-[580px] leading-[80px] text-[86px] text-white p-7">
				<div className="inline-block">
					<h1 >you can get <span className="text-lightGreen">very far</span> with just
						<Image alt="3 words logo" src="/logo-lime.svg" width={250} height={100} className="inline ml-5 mb-3"></Image>
					</h1>
					<h1 className="pb-20 mb-20 bottom-20">a day</h1>
				</div>
			</div>
			<div className="p-10">
				<Image alt="iphone mockup" src="/ip-mock.png" width={232} height={959}></Image>
			</div>
		</main>
	);
}