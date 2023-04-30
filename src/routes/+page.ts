import { dev } from "$app/environment";

export const prerender = true;

export async function load() {
    return {
        title: "Create your own speedy Guilded API bots with fun",
        description: "Guilded.NET is free and open-source, consistent and easy-to-use .NET API framework for Guilded."
    };
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;