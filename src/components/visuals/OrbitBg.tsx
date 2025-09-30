export default function OrbitBg() {
  return (
    <div className="orbit-bg" aria-hidden="true">
      <div className="orbit-bg__core" />

      {/* кольца с пунктиром */}
      <div className="orbit-bg__ring orbit-bg__ring--1" />
      <div className="orbit-bg__ring orbit-bg__ring--2" />
      <div className="orbit-bg__ring orbit-bg__ring--3" />

      {/* треки со спутниками */}
      <div className="orbit-bg__track orbit-bg__track--1">
        <span className="orbit-bg__node" />
      </div>
      <div className="orbit-bg__track orbit-bg__track--2">
        <span className="orbit-bg__node" />
      </div>
      <div className="orbit-bg__track orbit-bg__track--3">
        <span className="orbit-bg__node" />
      </div>

      {/* рассыпь мелких звёзд */}
      <div className="orbit-bg__twinkle" />
    </div>
  );
}
