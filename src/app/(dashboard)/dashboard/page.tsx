import {
  SugestedLinksList,
  DashboardEmployeesChart,
  DashboardSummaryCards,
} from "@/components/dashboard/Homepage";

const DashboardHomePage = () => {
  return (
    <div className="w-full min-h-screen bg-background px-4 sm:px-12 py-12">
      <SugestedLinksList />
      <DashboardSummaryCards />
      <DashboardEmployeesChart />
    </div>
  );
};

export default DashboardHomePage;
