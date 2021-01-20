namespace Guilded.NET.Website
    open System
    open System.IO
    open System.Text
    open System.Collections.Generic
    open Guilded.NET.Website
    module Program =
        let relative = "<!-- relative -->"
        /// <summary>
        /// A template HTML file to generate other HTML files.
        /// </summary>
        let template = "../template.html"
        [<EntryPoint>]
        let main argv =
            // Gets path as string
            let pathStr: string = if argv.Length <> 0 then String.Join(" ", argv) else "./src"
            // Fixes the path
            let path: string = Path.GetFullPath pathStr
            // Tells us what dir it is compiling
            printfn "Starting the project. Compiling `%s` directory." path
            // If src doesn't exist, raise an exception
            if not(Directory.Exists(path)) then raise (FileLoadException("Could not find a directory 'src'. Full path:\n" + path))
            // All of the documents
            let docs = List<GuildedDocument>()
            // Sifts all directories(doesn't sift the source directory itself)
            for dir in DirectoryInfo(path).GetDirectories() do
                Util.FetchDocs(docs, dir) |> ignore
            // Tell us how many documents it has found
            printfn "Found %d document(s)" docs.Count
            // Creates encoding for file writing
            let encoding = UTF8Encoding(true)
            // Gets template source
            let templateSrc = File.ReadAllText(Path.Join(path, template))
            // Tells us that it is writing documents
            printfn "Writing documents:"
            // Gets all of the documents
            for doc in docs do
                // The name of the directory
                let name = doc.InDirectory.FullName.Replace(path + Path.DirectorySeparatorChar.ToString(), "")
                // Tells us that it is writing right now
                printfn "    -----------------------"
                printfn "    Writing a new document: %s" name
                // Gets directory name
                let dirName = Path.GetDirectoryName name
                // Gets full dir name
                let fullDir = if String.IsNullOrWhiteSpace dirName then dirName else Path.GetFullPath dirName
                // To what it should replace <!-- relative -->
                let mutable relativeVar = "./"
                // Create a directory if it doesn't exist and get relative path to it
                if not(String.IsNullOrWhiteSpace fullDir) then
                    Directory.CreateDirectory("./page/" + fullDir) |> ignore
                    relativeVar <- Path.GetRelativePath(fullDir, ".").Replace("\\", "/") + "/" 
                // Creates a source for the file
                let source = doc.Change(templateSrc).Replace(relative, relativeVar)
                // Creates a file
                use stream: FileStream = File.Create("./page/" + name + ".html")
                // Writes the source
                stream.Write(encoding.GetBytes(source), 0, source.Length)
                // Tells us that it is done
                printfn "    Wrote a new document: %s" name
            // End of the program
            0