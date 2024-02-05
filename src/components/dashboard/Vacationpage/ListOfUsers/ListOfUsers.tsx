"use client";
import Calendar from "@/components/shared/Calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ListOfVacations from "./ListOfVacations";
import { VACATIONS } from "./VACATION_CONST";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface User {
  id: number;
  name: string;
  email: string;
  userCode: string;
}

type TListOfUsersProps = {
  users: User[];
};

const ListOfUsers = ({ users }: TListOfUsersProps) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleInputSearch = (userInput: string) => {
    const foundUsers = users.filter(
      (user) =>
        user.name.toLowerCase().trim().includes(userInput.toLowerCase()) ||
        user.userCode
          .toLocaleLowerCase()
          .trim()
          .includes(userInput.toLowerCase())
    );
    setFilteredUsers(foundUsers);
  };

  // AFTER CLICK AT USER NAME YOU NEED TO FETCH HIS VACATIONS EQUALS TO USER ID AND CACHE IT TO PREVENT UNECESSARY REQUESTS
  // EXAMPLE CACHE OBJECT
  // const cache = {
  //   "John Soe" :   {
  //     monthIndex: 2,
  //     vacationTaken: 9,
  //     days: ["6", "7", "8", "9"],
  //   },
  // }

  return (
    <div className="w-full bg-secondary h-full rounded-md p-4">
      <Input
        placeholder="Szukaj Użytkownika"
        onChange={(event) => handleInputSearch(event.target.value)}
        className="mb-4"
      />
      {filteredUsers.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <Accordion
              type="single"
              collapsible
              className="px-2 rounded-sm transition duration-300"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex">
                    <p>{user.name}</p>
                    <p className="font-thin">{`#${user.userCode}`}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 text-white">
                    <p className="p-4 bg-secondary rounded-sm">
                      Przysługujący urlop: 23
                    </p>
                    <p className="p-4 bg-secondary rounded-sm">
                      Ilość urlopu: 21
                    </p>
                    <p className="p-4 bg-secondary rounded-sm">
                      Urlop wykorzystany: 6
                    </p>
                    <p className="p-4 bg-secondary rounded-sm">
                      Urlop Zaległy: 5
                    </p>
                    <p className="p-4 bg-secondary rounded-sm">Opieka: 0</p>
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
