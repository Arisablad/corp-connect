const ReviewProgressBar = ({ count = 5 }: { count?: number }) => {
  const emptyDivs = 5 - count;

  return (
    <div className="w-28 rounded-xl p-1.5 flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => {
        return <div className="bg-green-400 w-full rounded-md"></div>;
      })}

      {Array.from({ length: emptyDivs }).map((_, i) => {
        return <div className="bg-orange-400 w-full rounded-md"></div>;
      })}
    </div>
  );
};

export default ReviewProgressBar;
