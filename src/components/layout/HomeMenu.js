import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -top-[70px] -z-10 left-0">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={"salad"} />
                </div>
                <div className="absolute  -top-[120px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={"salad"} />
                </div>
            </div>
            <div className="text-center">
                <SectionHeaders subHeader={'check out' } mainHeader={'Menu'}/>
            </div>
            <div className="grid grid-cols-3 mt-12 gap-4">
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
            </div>
        </section>
    )
}


