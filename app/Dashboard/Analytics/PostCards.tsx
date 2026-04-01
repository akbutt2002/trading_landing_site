"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  SquareArrowOutUpRight,
  Bookmark,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

const PostCards = ({ post }: any) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const getUserName = (text = "") => {
    const cleanText = text.trim();

    const combined = cleanText.split(/\s+/).slice(0, 2).join("");

    return combined + cleanText.length;
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <Card className="sm:w-full w-screen border-none ">
        {/* Header */}
        <CardHeader className="flex items-center gap-2">
          <div className="relative w-7 aspect-square">
            <Image
              src={post.image}
              alt="profile image"
              className="  object-cover rounded-full "
              fill
            />
          </div>
          <h2>{getUserName(post.caption)}</h2>
        </CardHeader>

        {/* Image */}
        <CardContent>
          <div className="relative w-full aspect-square">
            <Image
              src={post.image}
              alt="Post"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col items-start">
          <div className="flex justify-between items-center w-full">
            <nav className="flex gap-4">
              <div className="flex items-center gap-1 transition-all">
                <Heart
                  size={26}
                  onClick={handleLike}
                  className={`${isLiked ? "fill-red-700 text-red-700" : ""}`}
                />
                <span className={`${isLiked ? "text-lg" : "hidden"}`}>
                  {likes}
                </span>
              </div>

              <MessageCircle size={22} />

              <SquareArrowOutUpRight size={22} />
            </nav>

            <Bookmark size={24} />
          </div>
          <p className="mt-2 text-xs sm:text-sm ">
            <span className="font-semibold mr-3 ">
              {getUserName(post.caption)}
            </span>
            {post.caption}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCards;
