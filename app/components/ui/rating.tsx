import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function generateRating(rating: number) {
  return (
    <div className="flex gap-1 text-[20px] text-[#FF9529]">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          i<rating?
          <AiFillStar />:<AiOutlineStar />
        ))}
    </div>
  );
}
