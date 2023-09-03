import { client } from "@/lib/sanity/client";
import { sanityResponseType } from "@/types/types";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";

async function fetchCMSData() {
  const postQuery = `*[_type == "showcase"]{
    heroLinks,
    experiences[]->,
    projects[]->
  }[0]
  `;
  const data = await client.fetch(postQuery);

  return data;
}

export default async function Home() {
  const sanityData: sanityResponseType = await fetchCMSData();

  console.log(sanityData);
  const { heroLinks, experiences, projects } = sanityData;

  return (
    <main className="flex h-screen flex-col items-center overflow-hidden overflow-x-hidden bg-dark font-outfit">
      {/* Content Wrapper*/}
      <div className="w-full overflow-auto">
        {/* Hero */}
        <Hero heroLinks={heroLinks} />

        {/* About */}
        <About />

        {/* Experience */}
        <Experience experiences={experiences} />

        {/* Projects */}
        <About />

        {/* Footer */}
      </div>
    </main>
  );
}
