---
title: Creating a bot from scratch
layout: docs
---

# Getting Started: Creating a bot from scratch

> It is recommend to learn the basics of C# before making a bot based on Guilded.NET.
{: .note}

Make sure you installed [.NET SDK](https://dotnet.microsoft.com/download/dotnet). .NET 5 or above are recommended.

## Installing Guilded.NET

First of all, you must create a directory/folder where the bot is stored. Make a new directory and give it whatever name you want(PascalCase is preferred), like <q>JoesBot</q>, <q>GatoBot</q>, <q>CoolBot</q> or anything else.

After that, we'll need to create a new C#(or in other .NET language) project. Make sure you have MSBuild and dotnet tools installed(both of which are bundled together in .NET SDK by default). Go to/open up the newly created directory using your preferred terminal/console. Write `dotnet new console`(any other template works as well) and it should generate a fresh project for you.

Install Guilded.NET by typing [`dotnet add package Guilded.NET`](https://github.com/Guilded-NET/Guilded.NET.Templates) and Guilded.NET dependency should be added to your project. Now we'll need to run your bot.

## Configuring your bot

Now we'll need to define prefix and an authentication token for your bot. You can use either constants or configuration files for that, but we'll use a configuration file.

The name of the directory, the file and even properties in the file can be whatever you want to name it, but make sure it is referenced in your code. We'll use <q>config/config.json</q> in this documentation.

Let's create a new directory <q>config</q> and there, create a new file <q>config.json</q>. Create a property `auth` and property `prefix`, where your authentication token and prefix will be stored:

```json
{
  "auth": "authentication_credentials_here",
  "prefix": "!"
}
```
{: data-filename="config.json"}

As required by JSON's syntax[^1], make sure the token you are pasting is between quotation marks `"string of text here"`.

[^1]: [MDN JSON article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#examples)

Now we'll need to make sure your project won't forget about <q>config</q> folder while compiling itself. Add `<ItemGroup>`{: .language-xml}:

```xml
<!-- ... Other stuff ... -->
<ItemGroup>
    <Content Include="config/*">
        <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </Content>
</ItemGroup>
<!-- ... Other stuff ... -->
```
{: data-filename="ProjectName.csproj"}

This should include whole config directory.

You can now use it in your code:

```csharp
using System.IO;

using Newtonsoft.Json.Linq;
```
{: data-insert="0,2"}

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
using System.IO;

using Guilded.NET;

using Newtonsoft.Json.Linq;
```
{: data-insert="2"}

```csharp
// Below code auth and prefix definition
using GuildedBotClient client = new(auth);
```

Now launching your project using `dotnet run` should not do anything, because client is not connecting to Guilded yet.

## Connecting to Guilded

To connect to Guilded, you can use [ConnectAsync](/references/BaseGuildedClient_ConnectAsync()). There is one problem though. Once you use it, the bot will connect to Guilded and program will close seeing that it's done, which will make the bot disconnect. This can be solved by using `await Task.Delay(-1)`{: .language-csharp}, which will keep the program running and not close it while the connection with Guilded is still online. It will still keep the bot running even if the bot has disconnected from Guilded, so you'll need to use <kbd>CTRL</kbd><kbd>C</kbd> to close the program.

We'll define new asynchronous method to run the bot:

```csharp
using System.IO;
using System.Threading.Tasks;

using Guilded.NET;

using Newtonsoft.Json;
```
{: data-insert="1"}

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

Now that we have defined it, we can use it in main method:

```csharp
// static void Main()
// At the very bottom of Main
RunAsync(client).GetAwaiter().GetResult();
```

> Make sure to not put anything below `await Task.Delay(-1)`{: .language-csharp}, as it will never run.
{: .warning}

You can also subscribe to [Prepared](/references/AbstractGuildedClient_Prepared) or [Connected](/references/BaseGuildedClient_Connected) events to see that your bot has indeed connected:

```csharp
using System;
using System.IO;
using System.Threading.Tasks;

using Guilded.NET;

using Newtonsoft.Json;
```
{: data-insert="0"}

```csharp
// Below `using GuildedBotClient client = ...;`
client.Connected += (o, e) => Console.WriteLine("I have connected");
```

Now type `dotnet run` and it should both output <q>I have connected</q> and become online.

The bot won't do anything apart from connecting to Guilded, but if you want it to have commands, go to next document, [Giving bot functions](./givingFunctions), where we will be giving commands to the bot.