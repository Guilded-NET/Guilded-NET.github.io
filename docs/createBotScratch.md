---
title: Creating a bot from scratch
layout: docs
---

# Getting Started: Creating a bot from scratch

> It is recommend to learn the basics of C# before making a bot based on Guilded.NET.
{: .note}

Make sure you installed .NET SDK[^1]. .NET 5 or above[^1] are recommended.

[^1]: Download [.NET 5](https://dotnet.microsoft.com/download/dotnet/5.0), [.NET 6](https://dotnet.microsoft.com/download/dotnet/6.0)

## Installing Guilded.NET

First of all, you must create a directory/folder where the bot is stored. Make a new directory and give it whatever name you want(PascalCase is preferred), like <q>JoesBot</q>, <q>GatoBot</q>, <q>CoolBot</q> or anything else.

After that, we'll need to create a new C#(or in other .NET language) project. Make sure you have MSBuild and dotnet tools installed(both of which are bundled together in .NET SDK by default). Go to/open up that directory using your preferred terminal or console(CMD, Git Bash, XFCE Terminal, GNOME Terminal, Konsole, etc.). Write `dotnet new console`{: .language-shell}(`console` can be replaced with your preferred template) and it should generate a fresh project for you.

> Make sure not to close your terminal/console for the next step.
{: .warning}

Install Guilded.NET. Type `dotnet add package Guilded.NET`{: .language-shell}[^2] and `Guilded.NET` dependency should be added to your project. Now we'll need to run your bot.

[^2]: Guilded.NET Templates [GitHub](https://github.com/Guilded-NET/Guilded.NET.Templates), [NuGet](https://nuget.org/packages/Guilded.NET.Templates)

## Configuring your bot

Now we'll need to define prefix and an authentication token for your bot. You can use either constants or configuration files for that, but we'll use a configuration file.

Create a new directory <q>config</q> and there, create a new file <q>config.json</q>. Create a property `auth` and property `prefix`, where your authentication token and prefix will be stored:

```json
{
  "auth": "authentication_credentials_here",
  "prefix": "!"
}
```
{: data-filename="config.json"}

> <q>config</q> directory and <q>config.json</q> file are not mandatory to be named exactly that. You could name it whatever you want, but you'll need to reference it in your code by the name you gave it.
{: .note}

Now we'll need to make sure your project won't forget about <q>config</q> folder while compiling itself. To do that, add `<ItemGroup>`{: .language-xml} with `<Content>`{: .language-xml} referencing your config directory in `<Project>`{: .language-xml} from <q>ProjectName.csproj</q> file:

```xml
<ItemGroup>
    <Content Include="config/*">
        <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </Content>
</ItemGroup>
```
{: data-filename="ProjectName.csproj"}

This should include whole <q>config</q> directory.

We can now use it in your code:

```csharp
// At the very top
using System.IO;

using Newtonsoft.Json.Linq;
```
{: data-insert="1,3"}

```csharp
// static void Main()
// ...

// To get auth and prefix properties in config/config.json
JObject config = JObject.Parse(File.ReadAllText("./config/config.json"));

string auth   = config.Value<string>("auth"),
       prefix = config.Value<string>("prefix");
```
{: data-filename="Program.cs"}

This should allow you to use authentication token and prefix you provided. Now you can use it in your bot:

```csharp
// At the very top
using System.IO;

using Guilded.NET;

using Newtonsoft.Json.Linq;
```
{: data-insert="3"}

```csharp
// Below code auth and prefix definition
using GuildedBotClient client = new(auth);
```

Now launching your project using `dotnet run` should not do anything. That is because we aren't connecting to Guilded. This will be covered in another part.

## Connecting to Guilded

To connect to Guilded, you can use `await client.ConnectAsync()`{: .language-csharp} asynchronous method. There is one problem though, once you use `await client.ConnectAsync()`{: .language-csharp}, the bot will connect to Guilded and program will close seeing that it's done, which will make the bot disconnect. It can be solved by using `await Task.Delay(-1)`{: .language-csharp}, which will keep the program running and not close it while the connection with Guilded is still online. It will still keep the bot running even if the bot has disconnected from Guilded, so you'll need to use <kbd>CTRL</kbd><kbd>C</kbd> to close the program.

```csharp
// At the very top
using System.IO;
using System.Threading.Tasks;

using Guilded.NET;

using Newtonsoft.Json;
```
{: data-insert="2"}

```csharp
// Below static void Main()
static async Task RunAsync(GuildedBotClient client)
{
    await client.ConnectAsync().ConfigureAwait(false);
    // Stop program from closing
    await Task.Delay(-1);
}
```
{: data-filename="Program.cs"}

Now use the defined method in the Main method:

```csharp
// static void Main()
// At the very bottom of Main
RunAsync(client).GetAwaiter().GetResult();
```

> Make sure to not put anything below `await Task.Delay(-1)`{: .language-csharp}, as it will never run.
{: .warning}

You can also subscribe to `Prepared` or `Connected` events to see that your bot has indeed connected.

```csharp
// At the very top
using System;
using System.IO;
using System.Threading.Tasks;

using Guilded.NET;

using Newtonsoft.Json;
```
{: data-insert="1"}

```csharp
// Below using GuildedBotClient client = ...;
client.Connected += (o, e) => Console.WriteLine("I have connected");
```

## Done

Now type `dotnet run` and it should both output <q>I have connected</q> and be online.

The bot won't do anything apart from connecting to Guilded, but if you want it to have commands, go to next part, [Giving bot functions](./givingFunctions), where we'll provide various functions to the bot, such as commands.