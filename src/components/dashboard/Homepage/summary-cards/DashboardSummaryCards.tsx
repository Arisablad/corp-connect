import DashboardBestEmployeeCard from "./DashboardBestEmployeeCard";
import DashboardCalendarCard from "./DashboardCalendarCard";
import DashboardMessageCard from "./DashboardMessageCard";

const DashboardSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 mt-16 gap-8 xl:flex w-full">
      <DashboardBestEmployeeCard />
      <DashboardCalendarCard />
      <DashboardMessageCard />
    </div>
  );
};

export default DashboardSummaryCards;
