"use client";

import Menu from "./_components/menu";
import SubmitButton from "./_components/submit_button";
import MusicCover from "./_components/music_cover";
import MusicCreateInput from "./_components/music_create_input";
import { useEffect, useState } from "react";
import { genreChoices, moodChoices } from "./data";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  useEffect(() => {
    if (title !== "" && selectedGenre !== "" && selectedMood !== "")
      setButtonEnabled(true);
    else setButtonEnabled(false);
  }, [title, selectedGenre, selectedMood]);

  return (
    <main className="h-full min-h-screen  bg-black px-[2rem] py-16">
      <section className="mx-auto w-full max-w-[87.5rem] rounded-[1rem] bg-container-gray p-[7.5rem] pb-[5rem]">
        <div className="flex flex-row gap-[5.5rem] ">
          <MusicCover />
          <MusicCreateInput
            title={title}
            genre={selectedGenre}
            mood={selectedMood}
            setTitle={setTitle}
            setSelectedGenre={setSelectedGenre}
            setSelectedMood={setSelectedMood}
          />
        </div>
        <div className="mt-[3.75rem] flex justify-end gap-[1rem]">
          <SubmitButton
            label="공개하기"
            enabled={buttonEnabled}
            onClick={() => console.log("공개하기")}
          />
          <SubmitButton
            label="저장하기"
            enabled={buttonEnabled}
            onClick={() => console.log("저장하기")}
          />
        </div>
      </section>
      <Menu
        title="장르"
        list={genreChoices}
        selected={selectedGenre}
        setSelected={setSelectedGenre}
      />
      <Menu
        title="무드"
        list={moodChoices}
        selected={selectedMood}
        setSelected={setSelectedMood}
      />
    </main>
  );
}
