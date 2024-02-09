"use client";
import ReviewProgressBar from "@/components/shared/ReviewProgressBar";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const UserCard: React.FC<UserCardProps> = () => {
  const [showDatepicker, setShowDatepicker] = useState(false);

  return (
    <div className="bg-primary w-96 flex flex-col p-4 gap-4 justify-center items-center rounded-md text-white">
      <Calendar
        showDatePicker={showDatepicker}
        setShowDatePicker={setShowDatepicker}
      />
      <div className="rounded-full w-40 h-40">
        <Image
          src={"/my_photo.jpg"}
          alt={"User Name"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "50%" }}
        />
      </div>
      <h1 className="mt-4 font-medium">Remigiusz Szostak</h1>
      <div className="flex">
        <p>Ocena</p>
        <ReviewProgressBar count={5} />
      </div>
      <div className="flex">
        <p>Średnia Ocena</p>
        <ReviewProgressBar count={3} />
      </div>
    </div>
  );
};

export default UserCard;

type UserCardProps = {};
