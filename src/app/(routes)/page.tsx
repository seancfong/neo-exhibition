import { client } from "@/app/_lib/sanity/client";
import Hero from "@/components/hero/Hero";

async function fetchCMSData() {
  const postQuery = `*[_type == "showcase"][0]`;
  const data = await client.fetch(postQuery);

  return data;
}

export default async function Home() {
  const sanityData = await fetchCMSData();

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-dark font-outfit">
      {/* Content Wrapper*/}
      <div className="w-full max-w-screen-2xl">
        {/* Hero */}
        <Hero />

        {/* About */}

        {/* Showcase */}
      </div>
    </main>
  );
}
