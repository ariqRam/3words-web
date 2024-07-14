import Image from "next/image";

export default function Home() {
	return (
		<div className="m-2 bg-primary border-none rounded-[30px] flex flex-col md:flex-row place-content-between">
			<div className="w-[300px] md:w-[580px] leading-[40px] md:leading-[80px] text-[40px] md:text-[86px] text-white p-4 md:p-7">
				<div className="inline-block">
					<h1 >you can get <span className="text-lightGreen">very far</span> with just
						<Image alt="3 words logo" src="/logo-lime.svg" width={250} height={100} className="inline h-[50px] w-[130px] md:w-[250px] md:h-[100px] pl-3 md:pl-0 md:ml-5 -mt-2 md:-mt-3"></Image>
					</h1>
					<h1 className="pb-0 md:pb-20">a day</h1>
				</div>
			</div>
			<div className="self-center pb-5 md:p-10">
				<Image alt="iphone mockup" src="/ip-mock.png" width={270} height={959} className="w-[80px] md:w-[270px]"></Image>
			</div>
		</div>
	);
}