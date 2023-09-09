import { star } from "../assets/icons"
function ReviewCard({imgURL,customerName,rating,feedback}) {
  return (
    <div className="flex text-center flex-col justify-center items-center gap-3 mb-5">
        <img src={imgURL} className="rounded-full" width={100} height={100} />
        <p className="info-text lg:max-w-md">{feedback}</p>
        <p className="info-text flex gap-3"><img src={star} alt="rating" width={24} height={24}/> ({rating})</p>
        <h3 className="heading-text !text-3xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard