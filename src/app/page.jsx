import Section from "@/components/Layout/Section";
import Intro from "@/components/Sections/Intro/Intro";
import News from "@/components/Sections/News/News";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Intro getData={''} />
      <News />
    </>
  );
}
