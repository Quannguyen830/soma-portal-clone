import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import HomePage from "./_components/HomePage/HomePage";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./_components/shared/Providers";

export default async function Home() {

  return (
      <Providers>
        <HomePage />
      </Providers>
  );
}
