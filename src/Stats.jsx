export default function Stats({ numOfWords, numofCharacters, numInstagram, numFacebook }) {
  return (
    <section className="stats">
      <Stat num={numOfWords} label={"Words"} />
      <Stat num={numofCharacters} label={"Characters"} />
      <Stat num={numInstagram} label={"Instagram"} />
      <Stat num={numFacebook} label={"Facebook"} />
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
