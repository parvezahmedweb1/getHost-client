import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import useTitle from "../../Hooks/useTitle";
import Spanner from "../Others/Spanner/Spanner";
import Review from "../Review/Review";

const MyReview = () => {
  useTitle("Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://gethost-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete review?");
    if (proceed) {
      fetch(`https://gethost-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <section>
      {loading && <Spanner />}
      <div className="container mx-auto my-10">
        {reviews.length === 0 && (
          <h2 className=" text-2xl text-center  md:text-4xl text-slate-700 font-bold">
            Review is not found, Please add Review.
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Review
              key={review._id}
              userReview={review}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyReview;
