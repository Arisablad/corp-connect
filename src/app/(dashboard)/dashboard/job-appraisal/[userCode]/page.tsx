"use client";
import UserCard from "@/components/dashboard/job-appraisal/users/preview/UserCard";
import Calendar from "@/components/shared/Calendar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const UserGradePage = ({ params }: { params: { userCode: string } }) => {
  return (
    <div className="flex items-center flex-col p-4">
      <div className="flex gap-4 justify-center items-center">
        <ArrowLeft
          size={44}
          className="cursor-pointer hover:text-blue-500 duration-500 transition"
        />
        <UserCard />
        <ArrowRight
          size={44}
          className="cursor-pointer hover:text-blue-500 duration-500 transition"
        />
      </div>

      <Button className="mt-4 text-white">Edytuj Ocene</Button>
      <Button className="mt-4 text-white">Porównaj Ocene</Button>
      <Button className="mt-4 text-white">Zobacz Ocene z dnia</Button>
    </div>
  );
};

export default UserGradePage;
