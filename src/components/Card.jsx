export default function Card({ imgUrl }) {
  return (
    <>
      <div className="card">
        <img src={imgUrl} alt="random picture" />
      </div>
    </>
  )
}
