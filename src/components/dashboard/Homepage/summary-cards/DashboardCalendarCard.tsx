import Calendar from "@/components/shared/Calendar";

const DashboardCalendarCard = () => {
  return (
    <div className="cursor-pointer bg-white shadow-md rounded-md w-full min-h-48 max-h-max hover:bg-secondary/20 hover:scale-105 transition duration-700">
      <Calendar></Calendar>
    </div>
  );
};

export default DashboardCalendarCard;
