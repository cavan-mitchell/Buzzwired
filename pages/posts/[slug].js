import { useState } from "react";
import { sanityClient, urlFor, usePreviewSubscription } from "../../lib/sanity";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author->{
        name,
    }
    
  }`;

export default function OnePost({ data }) {
  const router = useRouter();
  const { post } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("api/createComment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("is this your name: ${data.name}");
    router.push("/thankyou");
  };

  return (
    <article className="max-w-3xl mx-auto p-5 pb-20">
      <h1 className="text-3xl font-bold font-serif mt-10 mb-3">{post.title}</h1>
      <main>
        <img
          className="w-full h-90 object-cover"
          src={urlFor(post?.mainImage).url()}
        />
        <h3 className="font-extralight text-sm pt-2 italic pb-1">
          Written by{" "}
          <span className="font-bold text-green-600">{post.author.name}</span>
        </h3>

        <h4 className="font-extralight text-sm pt-2 italic">
          Published at {new Date(post.publishedAt).toLocaleString()}
        </h4>
        <br></br>
        <div>
          <PortableText value={post?.body} />
        </div>
      </main>
      <div>
        <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

        {/* This is the form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-md text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: true, maxlenght: 80 })}
              name="name"
            />
            {errors.name && "Name Required"}
          </label>
          <label className="block mb-5">
            {" "}
            <span className="text-gray-700">Email</span>
            <input
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              placeholder="Enter your email"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email && "Email Required"}
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              {...register("comment", { required: true })}
              name="comment"
              placeholder="Leave a comment here"
              row={8}
            />
            {errors.comment && "Comment Required"}
          </label>
          <input
            type="submit"
            className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
      {/* Comments */}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
        <h3 className="font-bold">Comments</h3>
        <hr />
        {/* {post.comments.map((comment) => (
          <div>
            <p>
              {comment.name}:{comment.comment}
            </p>
          </div>
        ))} */}
      </div>
    </article>
  );
}

//This section tells Next.js which posts exist. which page to pre-build, which paths to pre-render. Don't want to use SSR for this. Gives back an array of paths which gives us all the slugs we need back.
//Currently ISR is not used. This will refresh page ie. every 60s  -> (revalidate:60)
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
  );
  return {
    paths,
    fallback: true,
  };
}

//Needs to be used with getStaticPaths. This takes all the slugs from getStaticPaths to than fetch the information for each page. Than we use props to populate the page with the requested data
export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug });
  return { props: { data: { post }, preview: true } };
}

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
