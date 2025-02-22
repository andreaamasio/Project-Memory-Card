export default function Card({ imgUrl, id, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgUrl} alt="random picture" />
    </div>
  )
}
