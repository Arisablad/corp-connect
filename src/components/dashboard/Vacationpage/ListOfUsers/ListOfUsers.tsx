import Calendar from "@/components/shared/Calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ListOfVacations from "./ListOfVacations";
import { VACATIONS } from "./VACATION_CONST";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

type TListOfUsersProps = {
  users: User[];
};

const ListOfUsers = ({ users }: TListOfUsersProps) => {
  return (
    <div className="w-full bg-slate-200 h-full rounded-md p-4">
      <input></input>
      {users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p>{user.name}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <p className="p-4 bg-slate-300 rounded-sm">
                      Przysługujący urlop: 23
                    </p>
                    <p className="p-4 bg-slate-300 rounded-sm">
                      Ilość urlopu: 21
                    </p>
                    <p className="p-4 bg-slate-300 rounded-sm">
                      Urlop wykorzystany: 6
                    </p>
                    <p className="p-4 bg-slate-300 rounded-sm">
                      Urlop Zaległy: 5
                    </p>
                    <p className="p-4 bg-slate-300 rounded-sm">Opieka: 0</p>
                  </div>

                  {/* WYKORZYSTANE URLOPY */}
                  <ListOfVacations Vacations={VACATIONS} />

                  <div className="flex items-center flex-col">
                    <p className="font-bold text-2xl mt-4">Zaplanuj Urlop</p>
                    <Calendar />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ListOfUsers;
