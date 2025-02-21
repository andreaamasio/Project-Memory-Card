export default function Card({ imgUrl, id }) {
  return (
    <>
      <div className="card">
        <img src={imgUrl} alt="random picture" key={id} />
      </div>
    </>
  )
}
