import React, { Suspense } from "react";
import "./globals.css";
import TopHeadlines from "./_components/TopHeadlines/TopHeadlines";
import Loading from "./loading";

export default function Home() {
  return (
    <div className='top-headlines'>
      <Suspense fallback={<Loading />}>
        <TopHeadlines />
      </Suspense>
    </div>
  );
}