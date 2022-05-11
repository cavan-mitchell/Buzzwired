import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
  body,
  author-> {
    name
  },
}`;

export default function News({ posts }) {
  return (
    <>
      {/* News Container Wrapper */}
      <div>
        {/* Hero Banner */}
        <div className="flex border-2 border-black justify-between max-w-8xl bg-yellow-400 items-centered py-10 px-10 lg:p-20">
          <div className="flex flex-col">
            <h1 className="text-black text-6xl font-serif max-w-xl">
              Stay informed on Blockchain Scams
            </h1>
            <h2 className="text-black text-xl font-serif pt-2">
              Buzzwired is the place to find your latest scam related news
            </h2>
          </div>
          <div>
            <img
              className="hidden sm:flex rounded-full"
              src="./media/buzz wired (300px blk-bg).png"
              width={200}
              height={100}
            />
          </div>
        </div>
        ;{/* This is the post's being pulled from Sanity */}
        <div className="">
          <div className="grid grid-cols-1 pl-7 items-center sm:pl-7 sm:grid-cols-2 lg:pl-7 lg:grid-cols-3 gap-3 md:pl-7 md:gap-6 p-2 md:p-6">
            {posts?.length > 0 &&
              posts.map((post) => (
                <div
                  className="border max-w-sm rounded-2xl group overflow-hidden"
                  key={post._id}
                >
                  <Link className="" href={`/posts/${post.slug.current}`}>
                    <a>
                      <img
                        className="h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={urlFor(post.mainImage).url()}
                        alt={post.name}
                      />
                      <p className="font-serif font-bold px-4">{post.title}</p>
                      <p className="font-serif px-4">by {post.author.name}</p>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return { props: { posts } };
}
