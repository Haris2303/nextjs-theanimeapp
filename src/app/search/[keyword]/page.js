import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section className="shadow-xl">
        <Header title={`Pencarian Untuk ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>

      <section></section>
    </>
  );
};

export default Page;
