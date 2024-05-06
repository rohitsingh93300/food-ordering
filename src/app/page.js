import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
     <Hero/>
     <HomeMenu/>
     <section className="text-center my-16">
      <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'}/>
      <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
      <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
      </div>
      
     </section>
     <section className="text-center my-16">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={'Contact Us'}/>
      <div className="mt-8">
        <a className="text-gray-500 underline text-4xl" href="tel:+91 1234567890">+91 1234567890</a>
      </div>
     </section>
    </>
  );
}
