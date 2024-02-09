import UserCard from "@/components/dashboard/job-appraisal/users/preview/UserCard";

const UserGradePage = ({ params }: { params: { userCode: string } }) => {
  return (
    <div className="flex items-center flex-col">
      <UserCard />
    </div>
  );
};

export default UserGradePage;
