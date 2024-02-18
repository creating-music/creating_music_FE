import { Input } from "@mui/base";
import Choice from "./choice";

interface MusicCreateInputProps {
  title: string;
  selectedGenre: string;
  selectedMood: string;
  onChangeTitle: (title: string) => void;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
}
export default function MusicCreateInput({
  title,
  selectedGenre,
  selectedMood,
  onChangeTitle,
  onChangeSelectedGenre,
  onChangeSelectedMood,
}: MusicCreateInputProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem] pr-[4rem]">
      <p className="text-[2rem] font-semibold text-white">Music Title</p>
      <Input
        type="text"
        required
        autoFocus
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
        placeholder="제목을 입력하세요."
        slotProps={{
          input: {
            className:
              "placeholder-[#52525B] placeholder text-[#A1A1AA] text-[1.5rem] w-full px-[1.5625rem] py-[0.5rem] bg-black border-none rounded-[1.5rem] focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
          },
        }}
      />
      <p className="text-[2rem] font-semibold text-white">Genre</p>
      {selectedGenre !== "" ? (
        <Choice
          label={selectedGenre}
          selected={selectedGenre}
          onChangeSelected={onChangeSelectedGenre}
        />
      ) : (
        <p className="h-[2.75rem] text-[1.25rem] text-[#52525B]">
          장르를 선택해주세요
        </p>
      )}

      <p className="text-[2rem] font-semibold text-white">Mood</p>
      {selectedMood !== "" ? (
        <Choice
          label={selectedMood}
          selected={selectedMood}
          onChangeSelected={onChangeSelectedMood}
        />
      ) : (
        <p className="h-[2.75rem] text-[1.25rem] text-[#52525B]">
          무드를 선택해주세요
        </p>
      )}
    </div>
  );
}
