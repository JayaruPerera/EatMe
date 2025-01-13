import "server-only";


// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     // Live content is currently only available on the experimental API
//     // https://www.sanity.io/docs/api-versioning
//     apiVersion: 'vX' 
//   }) 
// });

//set your viewer token
//These lines of code are setting up and exporting functions for interacting with the Sanity API using live data fetching

//1.Environment Variable Check:
const token = process.env.SANITY_API_TOKEN;   //This code retrieves the SANITY_API_TOKEN from the environment variables.
if(!token){
  throw new Error('Missing SANITY_API_READ_TOKEN');  //If the token is not found, it throws an error indicating that the SANITY_API_READ_TOKEN is missing.
}

//2.Define Live Data Fetching:
export const { sanityFetch, SanityLive } = defineLive({   //This code uses the defineLive function to set up live data fetching with Sanity.
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,    //which likely means that the fetched data should not be revalidated (cached) and should always be fetched fresh. 
  },
});

//The defineLive function returns an object with sanityFetch and SanityLive properties, which are then exported for use in other parts of the application.
//this code ensures that the necessary API token is available and then sets up and exports functions for live data fetching from the Sanity API.
