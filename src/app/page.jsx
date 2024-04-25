import Events from "@/components/Sections/Events/Events";
import Intro from "@/components/Sections/Intro/Intro";
import News from "@/components/Sections/News/News";
import Social from "@/components/Sections/Social/Social";
import Specials from "@/components/Sections/Specials/Specials";

export default function Home() {
  return (
    <>
      <Intro getData={''} />
      <News getData={''} />
      <Specials getData={''} />
      <Social />
      <Events />
    </>
  );
}
