import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <div>
      {/* Paling Populer */}
      <section>
        <Header title="Most Popular" linkTitle="Other" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
