import {
  DashboardBestEmployeeCard,
  DashboardCalendarCard,
  DashboardMessageCard,
} from "..";

const DashboardSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 mt-16 gap-8 xl:flex w-full">
      <DashboardBestEmployeeCard />
      <DashboardCalendarCard />
      <DashboardMessageCard />
    </div>
  );
};

export default DashboardSummaryCards;
