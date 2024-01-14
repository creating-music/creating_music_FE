export default function MusicCover() {
  return (
    <div className="h-fit flex-shrink-0 rounded-[0.9375rem] bg-gradient-to-b from-[#FF31FF]  to-[#27FEFF] p-[0.625rem] shadow-[10px_10px_20px_0_rgba(0,0,0,0.6)]">
      <img
        src="https://source.unsplash.com/random/300x300" // s3에서 음악 아이콘 가져오기
        className="h-[18.75rem] w-[18.75rem] rounded-[0.5rem]"
        alt=""
      />
    </div>
  );
}
