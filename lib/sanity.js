import { createClient, createPreviewSubscriptionHook } from "next-sanity";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

//Set up a helper function for generating Image URLs with only the asset reference data in your documents. It's an arrow function and it takes (source from the query) as an argument use the createImageUrlBuiilder function and passes the config and executes the function image and passes source. Basically gives a URL
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
