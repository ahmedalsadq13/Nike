import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomersReviews = () => {
  return (
    <section className="max-container">
      <h3 className="heading-text">What our
        <span className="text-coral-red "> Customers </span>
        Say?
        </h3>
        <p className="my-4 info-text mx-auto text-center [text-wrap:balance] max-w-lg ">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <ReviewCard
            key={ review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>
          ))}
        </div>
    </section>
  )
}

export default CustomersReviews