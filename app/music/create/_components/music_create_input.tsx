import { Input } from "@mui/base";
import Choice from "./choice";
import { genreChoices, moodChoices } from "../data";

interface MusicCreateInputProps {
  title: string;
  genre: string;
  mood: string;
  setTitle: (title: string) => void;
  setSelectedGenre: (label: string) => void;
  setSelectedMood: (label: string) => void;
}
export default function MusicCreateInput(props: MusicCreateInputProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem] pr-[4rem]">
      <p className="text-[2rem] font-semibold text-white">Music Title</p>
      <Input
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
        placeholder="제목을 입력하세요."
        slotProps={{
          input: {
            className:
              "placeholder-[#52525B] placeholder text-[#A1A1AA] text-[1.5rem] w-full px-[1.5625rem] py-[0.5rem] bg-black border-none rounded-[1.5rem] focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
          },
        }}
      />
      <p className="text-[2rem] font-semibold text-white">Genre</p>
      {props.genre !== "" ? (
        <Choice
          label={props.genre}
          selected={props.genre}
          setSelected={props.setSelectedGenre}
        />
      ) : (
        <p className="h-[2.5rem] text-[1.25rem] text-[#52525B]">
          장르를 선택해주세요
        </p>
      )}

      <p className="text-[2rem] font-semibold text-white">Mood</p>
      {props.mood !== "" ? (
        <Choice
          label={props.mood}
          selected={props.mood}
          setSelected={props.setSelectedMood}
        />
      ) : (
        <p className="h-[2.5rem] text-[1.25rem] text-[#52525B]">
          무드를 선택해주세요
        </p>
      )}
    </div>
  );
}
