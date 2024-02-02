import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MONTHS } from "./VACATION_CONST";

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
            {MONTHS.map((month) => {
              return (
                <div
                  key={month.month_index}
                  className="border border-blue-950 p-4 min-w-52 rounded-md"
                >
                  <p className="font-bold text-center text-xl">{month.name}</p>
                  <p className="font-semibold">Ilość dni: 12</p>
                  <div className="flex gap-4 text-white justify-center flex-wrap text-center">
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      06
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      07
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      08
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      09
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      10
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      11
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      12
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      13
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      14
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      15
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      16
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      17
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                    <span className="p-2 w-12 bg-orange-600 rounded-sm">
                      18
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ListOfVacations;
