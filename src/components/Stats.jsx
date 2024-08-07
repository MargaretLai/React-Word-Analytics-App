export default function Stats({stats}) {
  return (
    <section className="stats">
      <Stat num={stats.numOfWords} label={"Words"} />
      <Stat num={stats.numofCharacters} label={"Characters"} />
      <Stat num={stats.numInstagram} label={"Instagram"} />
      <Stat num={stats.numFacebook} label={"Facebook"} />
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${num < 0 ? "stat__number--limit" : ""}`}>{num}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
