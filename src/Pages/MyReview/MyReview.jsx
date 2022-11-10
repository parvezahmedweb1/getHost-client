import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Spanner from "../Others/Spanner/Spanner";
import Review from "../Review/Review";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user?.email]);
  console.log(reviews);
  return (
    <section>
      {loading && <Spanner />}
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Review key={review._id} userReview={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyReview;
