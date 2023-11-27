import Star from "../assets/Star";

type ratingProps = {
  rating: number;
};

const StartRating = ({ rating }: ratingProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let filledState: "none" | "half-filled" | "filled" = "none";

      // Determine the filled state based on the rating
      if (i <= rating) {
        filledState = "filled";
      } else if (i - 0.5 === rating) {
        filledState = "half-filled";
      }

      stars.push(<Star key={i} filled={filledState ? filledState : "none"} />);
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};
export default StartRating;
