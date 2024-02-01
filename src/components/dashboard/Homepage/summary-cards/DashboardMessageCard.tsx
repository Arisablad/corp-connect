import { Mail } from "lucide-react";

const DashboardMessageCard = () => {
  return (
    <div className="cursor-pointer bg-white shadow-md rounded-md w-full h-48 hover:bg-secondary/20 hover:scale-105 transition duration-700 flex justify-center items-center group">
      <div className="flex flex-col gap-1 h-full p-4">
        <Mail className="w-full h-full text-gray-700 group-hover:text-gray-900 transition duration-300" />
        <p className="font-light">
          Masz <span className="font-semibold">0</span> Wiadomości
        </p>
      </div>
    </div>
  );
};

export default DashboardMessageCard;
