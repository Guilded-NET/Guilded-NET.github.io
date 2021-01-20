namespace Guilded.NET.Website
    open System.IO
    open System.Collections.Generic
    open Guilded.NET.Website
    /// <summary>
    /// Basic utilities for the website.
    /// </summary>
    module Util =
        /// <summary>
        /// Sifts subdirectories and if it's a document directory, adds to docs.
        /// </summary>
        let rec FetchDocs(docs: List<GuildedDocument>, dir: DirectoryInfo) =
            // If it is document directory, add it as doc
            if GuildedDocument.IsDocument(dir) then
                docs.Add(GuildedDocument(dir))
            // Gets subdirs
            for subdir in dir.GetDirectories() do
                // Does the same with the subdirs
                (FetchDocs(docs, subdir)) |> ignore
            // Returns this directory
            docs