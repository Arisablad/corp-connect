import {
  ListOfUsers,
  VacationSummary,
} from "@/components/dashboard/Vacationpage";
import { USERS } from "@/mocks/ListOfUsersMock";

// HERE FETCH A USERS FROM DB SERVER SIDE COMPONENT

const VacationManagmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-background px-4 sm:px-12 py-12">
      <div className="flex flex-col xl:flex-row gap-12">
        <ListOfUsers users={USERS} />
        <VacationSummary />
      </div>
    </div>
  );
};

export default VacationManagmentPage;
