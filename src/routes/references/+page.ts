import { dev } from "$app/environment";

export const prerender = true;

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;