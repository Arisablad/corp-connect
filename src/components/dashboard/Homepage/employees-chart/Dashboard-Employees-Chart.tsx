import Image from "next/image";

const DashboardEmployeesChart = () => {
  return (
    <div className="relative cursor-pointer mt-16 bg-white shadow-md rounded-md w-full h-96 hover:bg-slate-800/20 hover:scale-105 transition duration-700 flex">
      <Image
        src={"/company-site.jpg"}
        alt={"Przykładowy Wykres"}
        className=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed bg-blend-screen opacity-55"></div>
    </div>
  );
};

export default DashboardEmployeesChart;
