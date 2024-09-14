import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl font-bold">
          {anime.data.title} ({anime.data.title_japanese}) - {anime.data.year}
        </h3>
      </div>
      <div classname="pt-4 px-4 flex gap-2 text-white">
        <div className="flex">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width="250"
            height="250"
            className="w-full md:w-auto rounded object-cover pt-4 px-4"
          />
          <div className="p-3">
            <div className="pt-4 text-center flex flex-col">
              <h3 className="font-bold">RANKING</h3>
              <p>{anime.data.rank}</p>
            </div>
            <div className="pt-4 text-center flex flex-col">
              <h3 className="font-bold">RATING</h3>
              <p>{anime.data.rating}</p>
            </div>
            <div className="pt-4 text-center flex flex-col">
              <h3 className="font-bold">EPISODE</h3>
              <p>{anime.data.episodes}</p>
            </div>
            <div className="pt-4 text-center flex flex-col">
              <h3 className="font-bold">DURATION</h3>
              <p>{anime.data.duration}</p>
            </div>
          </div>
        </div>
        <p className="text-justify text-xl pt-4 px-4">{anime.data.synopsis}</p>
      </div>
    </>
  );
};

export default Page;
