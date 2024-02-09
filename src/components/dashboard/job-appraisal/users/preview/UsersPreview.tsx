"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const UsersPreview = ({ users }: TListOfUsersProps) => {
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
              className="hover:bg-accent-foreground/10 px-2 rounded-sm transition duration-300"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex">
                    <p>{user.name}</p>
                    <p className="font-thin">{`#${user.userCode}`}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 text-white">User1</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UsersPreview;
