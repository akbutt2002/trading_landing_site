"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SmilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileCards from "./ProfileCards";
import toast from "react-hot-toast";

const MyProfile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const fetchCat = async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      console.log(data);
      if (data[0]?.url) {
        setImage(data[0].url);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");

    if (savedImage) {
      setImage(savedImage);
    } else {
      fetchCat();
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageData = reader.result as string;

        setImage(imageData); // show image in UI
        localStorage.setItem("profileImage", imageData);
        toast.success("Image uploaded successfully!");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" md:flex md:gap-3 h-screen mx-2">
      <section className="mt-5">
        <div className="flex gap-2 items-center md:block">
          <div className="relative w-11 h-11 sm:w-20 sm:h-20 lg:w-60 lg:h-60">
            <div className="h-full w-full rounded-full overflow-hidden border-2 border-gray-600 flex items-center justify-center bg-gray-200">
              {loading && (
                <div className="absolute animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-800"></div>
              )}
              {!loading && error && (
                <div className="text-black text-xs sm:text-sm">Add Image</div>
              )}
              {image && (
                <Image
                  src={image}
                  alt="profile image"
                  fill
                  onLoad={() => setImageLoaded(true)}
                  className={`object-cover rounded-full hover:scale-105 transition-all duration-700 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="avatarInput"
              className="w-5 h-5 lg:h-10 lg:w-10 absolute flex items-center cursor-pointer justify-center bg-[#171717] border border-gray-600 rounded-full right-0 bottom-0 lg:right-2 lg:bottom-5 "
            >
              <SmilePlus size={22} />
            </label>
          </div>
          <div className="py-4">
            <h1 className="text-2xl  font-bold ">Muhammad Ahmad</h1>
            <p className="text-xl text-gray-500">akbutt2002</p>
          </div>
        </div>
        <Button className="w-full border border-gray-700 text-center bg-gray-800">
          Edit Profile
        </Button>
      </section>

      <section className="flex-1 mt-4 md:mt-2 ">
        <h1 className="pb-2">Profile Analytics</h1>
        <ProfileCards />
      </section>
    </div>
  );
};

export default MyProfile;
