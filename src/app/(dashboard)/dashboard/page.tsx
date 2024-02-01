import DashboardEmployeesChart from "@/components/dashboard/Homepage/employees-chart/Dashboard-Employees-Chart";
import SugestedLinksList from "@/components/dashboard/Homepage/suggested-links/sugested-links-list";
import DashboardSummaryCards from "@/components/dashboard/Homepage/summary-cards/DashboardSummaryCards";

const DashboardHomePage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 px-4 sm:px-12 py-12">
      <SugestedLinksList />
      <DashboardSummaryCards />
      <DashboardEmployeesChart />
    </div>
  );
};

export default DashboardHomePage;
