import { MouseEventHandler, useEffect, useState } from "react";
import MusicCover from "./music_cover";
import MusicCreateInput from "./music_create_input";
import Button from "@/app/_components/Button";

interface MusicCreateFormProps {
  selectedGenre: string;
  selectedMood: string;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
}

export default function MusicCreateForm({
  selectedGenre,
  selectedMood,
  onChangeSelectedGenre,
  onChangeSelectedMood,
}: MusicCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const onChangeTitle = (title: string) => setTitle(title);

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  useEffect(() => {
    if (title !== "" && selectedGenre !== "" && selectedMood !== "")
      setButtonEnabled(true);
    else setButtonEnabled(false);
  }, [title, selectedGenre, selectedMood]);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("submit");
    e.preventDefault();
    // api 호출 ~
  };

  return (
    <form name="music-create">
      <section className="mx-auto w-full max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 p-[7.5rem] pb-[5rem]">
        <div className="flex flex-row gap-[5.5rem] ">
          <MusicCover />
          <MusicCreateInput
            title={title}
            selectedGenre={selectedGenre}
            selectedMood={selectedMood}
            onChangeTitle={onChangeTitle}
            onChangeSelectedGenre={onChangeSelectedGenre}
            onChangeSelectedMood={onChangeSelectedMood}
          />
        </div>
        <div className="mt-[3.75rem] flex justify-end gap-[1rem]">
          <Button
            type="submit"
            disabled={!buttonEnabled}
            label={"공개하기"}
            onClick={onSubmit}
            filled={false}
            size="md"
          />
          <Button
            type="submit"
            disabled={!buttonEnabled}
            label="저장하기"
            onClick={onSubmit}
            filled={false}
            size="md"
          />
        </div>
      </section>
    </form>
  );
}
