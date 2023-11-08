import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 transition-all">
      {api.data?.map((data) => {
        return (
          <Link
            href={`/anime/${data.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={data.mal_id}
          >
            <Image
              src={data.images.webp.image_url}
              alt="Placeholder"
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
