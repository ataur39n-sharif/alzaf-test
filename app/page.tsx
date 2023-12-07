import HomeSlider from "@/components/slider";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute top-0 left-0 w-[100vw] h-[380px] z-10">
          <div className=" h-[380px] container">
            <div className="w-[230px] bg-white h-full">
              Alex Tom
            </div>
          </div>
        </div>
        <HomeSlider />
      </div>
    </main>
  );
}
