import UsersPreview from "@/components/dashboard/job-appraisal/users/preview/UsersPreview";
import { USERS } from "@/mocks/ListOfUsersMock";

// HERE FETCH A USERS FROM DB SERVER SIDE COMPONENT

const JobAppraisalPage = () => {
  return (
    <div className="w-full min-h-screen bg-background px-4 sm:px-12 py-12">
      <div className="flex flex-col xl:flex-row gap-12">
        <UsersPreview users={USERS} enableRedirect />
      </div>
    </div>
  );
};

export default JobAppraisalPage;
