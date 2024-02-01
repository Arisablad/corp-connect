"use client";

interface HeaderSelectorProps {
  text: string;
  index: number;
  selected: number;
  setActive: (index: number) => void;
  classType: string;
}

const HeaderSelector = ({
  text,
  index,
  selected,
  setActive,
  classType,
}: HeaderSelectorProps) => {
  return (
    <div
      className={classType}
      onClick={() => setActive(index)}
      style={{
        backgroundColor: index === selected ? "#35ebc7" : "transparent",
        color: index === selected ? "black" : "black",
        transition: "background-color 1s",
      }}
    >
      {" "}
      {text}{" "}
    </div>
  );
};

export default HeaderSelector;
