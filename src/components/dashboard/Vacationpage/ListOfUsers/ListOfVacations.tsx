import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MONTHS } from "./VACATION_CONST";
import React from "react";

type TVacation = {
  monthIndex: number;
  vacationTaken: number;
  days: string[];
};

type ListOfVacationsProps = {
  Vacations: TVacation[];
};

const ListOfVacations = ({ Vacations }: ListOfVacationsProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Wykorzystane Urlopy:</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-center gap-4 overflow-x-auto">
            {Vacations.map((vacation) => {
              const { monthIndex, days } = vacation;
              const month = MONTHS[monthIndex];

              if (!month) return null; // Ignore invalid months

              return (
                <React.Fragment key={monthIndex}>
                  <div className="border border-blue-950 p-4 min-w-52 w-full rounded-md">
                    <p className="font-bold text-center text-xl">
                      {month.name}
                    </p>
                    <p className="font-semibold">Ilość dni: {days.length}</p>
                    <div className="flex gap-4 text-white justify-center flex-wrap text-center">
                      {days.map((day, index) => (
                        <span
                          key={index}
                          className="p-2 w-12 bg-orange-600 rounded-sm"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ListOfVacations;
