export default function MusicCreateForm() {
  return (
    <div id="#form" className="max-w-[480px]">
      <form>
        <div>
          <label htmlFor="title">제목</label>
          <input id="title" name="title" />
        </div>
        <div>
          <label htmlFor="genre">장르</label>
          <input id="genre" name="genre" />
        </div>
        <div>
          <label htmlFor="mood">무드</label>
          <input id="mood" name="mood" />
        </div>
      </form>
    </div>
  );
}
