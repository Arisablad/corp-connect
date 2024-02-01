import Calendar from "@/components/shared/Calendar";

const DashboardCalendarCard = () => {
  return (
    <div className="bg-white shadow-md rounded-md w-full min-h-48 flex justify-center max-h-max hover:scale-105 transition duration-700">
      <Calendar></Calendar>
    </div>
  );
};

export default DashboardCalendarCard;
