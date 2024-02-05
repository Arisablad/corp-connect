import RoundedProgressBar from "@/components/shared/RoundedProgressBar";

const VacationSummary = () => {
  return (
    <div className="w-full h-min bg-secondary rounded-md flex flex-col md:flex-row items-center p-4">
      <div className="flex flex-col items-center">
        <span className="text-xl font-semibold text-center">
          Aktualna Ilość Pracowników
        </span>
        <RoundedProgressBar
          minValue={260}
          maxValue={300}
          size={13}
          showLabels
          progressColor="green"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-xl font-semibold">Pracownicy na urlopie</span>
        <RoundedProgressBar
          minValue={30}
          maxValue={300}
          size={13}
          showLabels
          progressColor="indigo"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-xl font-semibold">Nieobecni Pracownicy</span>
        <RoundedProgressBar
          minValue={10}
          maxValue={300}
          size={13}
          showLabels
          progressColor="red"
        />
      </div>
    </div>
  );
};

export default VacationSummary;
