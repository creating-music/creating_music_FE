"use client";

import { MouseEventHandler, useState } from "react";
import MusicCover from "./MusicCover";
import MusicTextInput from "./MusicTextInput";
import MusicCreateSelect from "./MusicCreateSelect";
import { CreateMusicRequestBody, createMusic } from "@/app/_api/music";
import { Button } from "@mui/base";
import { useMutation } from "@tanstack/react-query";
import { Music } from "@/app/_types/music";
interface MusicCreateFormProps {
  onSuccessCreate?: (music: Music) => void;
}

export default function MusicCreateForm({
  onSuccessCreate,
}: MusicCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedTempo, setSelectedTempo] = useState<string>("");
  const { mutate, isPending } = useMutation({
    mutationKey: ["create", "music"],
    mutationFn: async (body: CreateMusicRequestBody) => {
      const res = await createMusic(body);

      return res;
    },
    onSuccess: (res) => {
      if (!res) return;

      onSuccessCreate && onSuccessCreate(res.result);
    },
  });

  const onChangeTitle = (title: string) => setTitle(title);
  const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);
  const onChangeSelectedTempo = (tempo: string) => setSelectedTempo(tempo);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    var email = sessionStorage.getItem("email");
    if (email == null) {
      alert("로그인이 필요한 기능입니다");
    }
    mutate({
      name: title,
      genre: selectedGenre,
      mood: selectedMood,
      tempo: selectedTempo,
    });
  };

  const submitButtonEnabled = [
    title,
    selectedGenre,
    selectedMood,
    selectedTempo,
  ].every((v) => !!v);

  return (
    <form name="music-create">
      <section className="mx-auto w-full max-w-[65.5rem] rounded-[1rem] bg-u-gray-400 p-[3rem]">
        <div className="flex flex-row items-center gap-[4rem]">
          <MusicCover />
          <div className="flex flex-col gap-[16px]">
            <MusicTextInput value={title} onChange={onChangeTitle} />
            <MusicCreateSelect
              selectedGenre={selectedGenre}
              selectedMood={selectedMood}
              selectedTempo={selectedTempo}
              onChangeSelectedGenre={onChangeSelectedGenre}
              onChangeSelectedMood={onChangeSelectedMood}
              onChangeSelectedTempo={onChangeSelectedTempo}
            />
          </div>
        </div>
        <div className="mt-[2.5rem] flex justify-end gap-[1rem]">
          <Button
            type="submit"
            disabled={isPending || !submitButtonEnabled}
            onClick={onSubmit}
            slotProps={{
              root: {
                className:
                  "max-content flex justify-center items-center bg-[#52525b] rounded-[20px] font-medium text-[1.25rem] h-[40px] w-[136px] px-[24px] disabled:text-[#27272a]",
              },
            }}
          >
            {isPending ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="h-[24px] w-[24px] animate-spin fill-gray-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              "생성하기"
            )}
          </Button>
        </div>
      </section>
    </form>
  );
}
