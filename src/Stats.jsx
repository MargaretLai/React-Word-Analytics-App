export default function Stats({ numofCharacters }) {
  return (
    <section className="stats">
      <Stat num={0} label={"Words"} />
      <Stat num={numofCharacters} label={"Characters"} />
      <Stat num={280} label={"Instagram"} />
      <Stat num={2200} label={"Facebook"} />
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{num}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
