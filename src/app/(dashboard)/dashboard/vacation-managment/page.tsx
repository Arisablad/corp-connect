import ListOfUsers from "@/components/dashboard/Vacationpage/ListOfUsers/ListOfUsers";
import VacationSummary from "@/components/dashboard/Vacationpage/ListOfUsers/VacationSummary";
import { USERS } from "@/mocks/ListOfUsersMock";

// HERE FETCH A USERS FROM DB SERVER SIDE COMPONENT

const VacationManagmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 px-4 sm:px-12 py-12">
      <div className="flex gap-12">
        <ListOfUsers users={USERS} />
        <VacationSummary />
      </div>
    </div>
  );
};

export default VacationManagmentPage;
