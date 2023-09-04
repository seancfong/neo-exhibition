import { client } from "@/lib/sanity/client";
import { sanityResponseType } from "@/types/types";
import Image from "next/image";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";

async function fetchCMSData() {
  const postQuery = `*[_type == "showcase"]{
    heroLinks[] {
      ...,
      reactIcon->
    },
    experiences[]->,
    projects[]-> {
      ...,
      links[] {
        ...,
        reactIcon->
      }
    }
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
    <main className="items-center bg-dark font-outfit">
      {/* Background Image */}
      <div className="fixed left-0 top-0 h-full w-full">
        <Image
          src="/images/bg-waves.webp"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content Wrapper*/}
      <div className="z-10 w-full">
        {/* About */}
        <About links={heroLinks} />

        {/* Experience */}
        <Experience experiences={experiences} />

        {/* Projects */}
        <About links={heroLinks} />

        {/* Footer */}
      </div>
    </main>
  );
}
