"use client";
import prisma from "../../lib/prisma";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <h1>Let&apos;s Talk Movies and TV!</h1>
      <div>
        <h2>Post | Created At: time</h2>
        <p>title</p>
      </div>
      <div>
        <p>username</p>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// }
