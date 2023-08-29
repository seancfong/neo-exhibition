import { client } from "@/lib/sanity/client";
import { sanityResponseType } from "@/types/types";
import Hero from "@/components/hero/Hero";

async function fetchCMSData() {
  const postQuery = `*[_type == "showcase"]{
    heroLinks,
    projects[]->
  }[0]
  `;
  const data = await client.fetch(postQuery);

  return data;
}

export default async function Home() {
  const sanityData: sanityResponseType = await fetchCMSData();

  console.log(sanityData);
  const { heroLinks, projects } = sanityData;

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-dark font-outfit">
      {/* Content Wrapper*/}
      <div className="w-full max-w-screen-2xl">
        {/* Hero */}
        <Hero heroLinks={heroLinks} />

        {/* About */}

        {/* Showcase */}
      </div>
    </main>
  );
}
