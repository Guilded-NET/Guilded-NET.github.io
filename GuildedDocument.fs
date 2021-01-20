namespace Guilded.NET.Website
    open System.IO
    open System.Linq
    open System.Collections.Generic
    open Markdig
    /// <summary>
    /// A page document.
    /// </summary>
    type GuildedDocument(dir: DirectoryInfo) =
        /// <summary>
        /// A built markdown pipeline.
        /// </summary>
        static let md = MarkdownPipelineBuilder().UseAdvancedExtensions().UseFootnotes().UseAutoLinks().DisableHtml().UsePipeTables().UseAutoIdentifiers().UseEmphasisExtras().UseGenericAttributes().UseSoftlineBreakAsHardlineBreak().Build()
        /// <summary>
        /// What string it should replace.
        /// </summary>
        /// <param name="file">File it should replace with</param>
        /// <returns>String to be replaced</returns>
        static member private ToReplace(file: FileInfo) =
            // Gets the name of the file
            let filename = Path.GetFileName file.Name
            // Returns a string it should replace
            KeyValuePair<string, string>("<!-- Template: " + filename + " -->", File.ReadAllText <| file.FullName)
        /// <summary>
        /// If the directory is a document directory.
        /// </summary>
        static member public IsDocument(dir: DirectoryInfo): bool = dir.GetFiles().Where(fun f -> Path.GetExtension(f.FullName).ToLower() = ".md").Count() <> 0
        /// <summary>
        /// In directory this document is in.
        /// </summary>
        member public this.InDirectory = dir
        /// <summary>
        /// Changes the page based on the given files.
        /// </summary>
        member public this.Change(page: string): string =
            // All files in the directory
            let files = this.InDirectory.GetFiles()
            // Gets parts it should replace
            let dict: IEnumerable<KeyValuePair<string, string>> = files.Select(fun file -> GuildedDocument.ToReplace(file))
            // String to replace
            let mutable replace = page
            // Replaces all occurences
            for key in dict do
                // Replaces the all KeyValuePair keys occurences with KeyValuePair values
                replace <- replace.Replace(key.Key, Markdown.ToHtml(key.Value, md))
            // Returns replaced string
            replace