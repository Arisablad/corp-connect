import ReviewProgressBar from "@/components/shared/ReviewProgressBar";
import Image from "next/image";

const DashboardBestEmployeeCard = () => {
  return (
    <div
      className="cursor-pointer bg-white shadow-md rounded-md w-full h-64 hover:bg-secondary/20 hover:scale-105 transition duration-700 flex flex-col items-center sm:flex-row sm:h-48
     gap-4 p-4"
    >
      <p className="sm:hidden">Pracownik Miesiąca</p>
      <div className="w-24 h-24">
        <Image
          src={"/my_photo.jpg"}
          alt={"Pracownik Miesiąca"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "50%" }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="leading-5">
          <p className="font-bold text-center sm:text-left">
            Remigiusz Szostak
          </p>
          <p className="text-center sm:text-left">Dział IT</p>
        </div>
        <div className="hidden sm:block mt-2">
          <div className="flex gap-2 justify-between">
            Dyscyplina: <ReviewProgressBar />
          </div>
          <div className="flex gap-2 justify-between">
            Jakość: <ReviewProgressBar count={4} />
          </div>
          <div className="flex gap-2 justify-between">
            Wydajność: <ReviewProgressBar count={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBestEmployeeCard;
