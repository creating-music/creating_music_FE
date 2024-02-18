"use client";

import MusicCreateForm from "./_components/music_create_form";
import Menu from "./_components/menu";
import { useState } from "react";
import { genreChoices, moodChoices } from "./data";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");

  const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);

  return (
    <main className="h-full min-h-screen  bg-black px-[2rem] py-16">
      <MusicCreateForm
        selectedGenre={selectedGenre}
        selectedMood={selectedMood}
        onChangeSelectedGenre={onChangeSelectedGenre}
        onChangeSelectedMood={onChangeSelectedMood}
      />
      <Menu
        title="장르"
        list={genreChoices}
        selected={selectedGenre}
        onChangeSelected={onChangeSelectedGenre}
      />
      <Menu
        title="무드"
        list={moodChoices}
        selected={selectedMood}
        onChangeSelected={onChangeSelectedMood}
      />
    </main>
  );
}
