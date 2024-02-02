import ListOfUsers from "@/components/dashboard/Vacationpage/ListOfUsers/ListOfUsers";
import VacationSummary from "@/components/dashboard/Vacationpage/ListOfUsers/VacationSummary";

const VacationManagmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 px-4 sm:px-12 py-12">
      <div className="flex gap-12">
        <ListOfUsers />
        <VacationSummary />
      </div>
    </div>
  );
};

export default VacationManagmentPage;
