"use client";

import React, { useEffect, useState, useRef } from "react";
import PostCards from "./PostCards";
import PostSkeleton from "./PostSkeleton";

const AnalyticPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //   const [caption, setCaption] = useState<string[]>([]);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async () => {
    setLoading(true);

    const imgRes = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    console.log(imgRes);
    const images = await imgRes.json();
    console.log(images);

    const captionPromises = Array.from({ length: 10 }, () =>
      fetch("https://catfact.ninja/fact").then((res) => res.json()),
    );

    const captions = await Promise.all(captionPromises);

    const combined = images.map((img: any, index: number) => ({
      id: img.id + "-" + Math.random(),
      image: img.url,
      caption: captions[index]?.fact || "No Caption",
    }));

    setPosts((prev) => [...prev, ...combined]);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="w-1/2  grid grid-cols-1  gap-4">
      {posts.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
      {loading &&
        Array.from({ length: 3 }).map((_, i) => <PostSkeleton key={i} />)}
      <div ref={loaderRef} className="h-full" />
    </div>
  );
};

export default AnalyticPage;
