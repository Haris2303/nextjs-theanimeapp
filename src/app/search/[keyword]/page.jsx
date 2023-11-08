import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section className="shadow-xl">
        <Header title={`Pencarian Untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>

      <section></section>
    </>
  );
};

export default Page;
