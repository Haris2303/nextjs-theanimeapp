import { getAnimeResponse } from "@/app/libs/api-libs";
import HeaderCard from "@/components/Util/HeaderCard";
import VideoPlayer from "@/components/Util/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="mt-5">
        <h3 className="text-2xl text-center text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        <div className="mt-4 flex justify-center gap-2 text-center text-color-primary overflow-x-auto">
          <HeaderCard title={`PERINGKAT`} data={anime.data.rank} />
          <HeaderCard title={`SKOR`} data={anime.data.score} />
          <HeaderCard title={`ANGGOTA`} data={anime.data.members} />
          <HeaderCard title={`EPISODE`} data={anime.data.episodes} />
        </div>
        <div className="mt-5 px-4 flex sm:flex-nowrap flex-wrap justify-center gap-2 text-color-primary">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className="w-full rounded object-cover"
          />
          <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
