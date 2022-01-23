---
layout: docs
tags:
    - Getting Started
    - Guilded.NET
    - Docs
    - C#
---

# Getting Started: Developing the bot

## Installing Guilded.NET

First of all, create a new project. Guilded.NET works with any template.

> Guilded.NET offers installable MSBuild templates, which can be found [here](https://www.nuget.org/packages/Guilded.NET.Templates/). Just be sure to edit the <q>config/config.json</q> file and insert your token.
{: .note}

Install Guilded.NET by typing [`dotnet add package Guilded.NET`](https://github.com/Guilded-NET/Guilded.NET.Templates) and Guilded.NET dependency should be added to your project. Now we'll need to run your bot.

## Configuring your bot

Now we'll need to define prefix and an authentication token for your bot. You can use either constants or configuration files for that, but we'll use a configuration file.

The name of the directory, the file and even properties in the file can be whatever you want to name it, but make sure it is referenced in your code. We'll use <q>config/config.json</q> in this documentation.

In your config file, create a property `auth` and property `prefix`, where your authentication token and prefix will be stored:

```json
{
  "auth": "authentication_credentials_here",
  "prefix": "!"
}
```
{: data-filename="config/config.json"}

Be sure to make MSBuild not ignore your config folder in your project file:

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

We now have a configuration file that we can safely reference in our code and use properties in it. You can use either System.Text.Json or Newtonsoft.Json to deserialize our JSON and get its values. For this tutorial, we are going to use Newtonsoft.Json, since Guilded.NET has Newtonsoft.Json as a dependency. Newtonsoft.Json will be removed as a dependency in the future, so if you'll still want to use Newtonsoft.Json, it is recommended to add Newtonsoft.Json as a dependency in your project.

We are now going to get the configuration and use it in our bot:

```csharp
using System.IO;

using Guilded.NET;

using Newtonsoft.Json.Linq;
```
{: data-insert="0,2,4"}

```csharp
// static void Main()
// ...

JObject config = JObject.Parse(File.ReadAllText("./config/config.json"));

string auth   = config.Value<string>("auth"),
       prefix = config.Value<string>("prefix");

using GuildedBotClient client = new(auth);
```
{: data-filename="Program.cs"}

You can now run your project, but as we can see, it doesn't really do anything. But that's because we are only creating our bot, not connecting to Guilded yet, which we are going to do in the next section.

## Connecting to Guilded

Method [ConnectAsync](/references/BaseGuildedClient_ConnectAsync()) is used to connect the client to Guilded. But once you use it, the bot will connect to Guilded and program will close seeing that it's done. One of the ways to stop it from closing is to use `await Task.Delay(-1)`{: .language-csharp}:

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

Now we can reference it in Main method:

```csharp
// static void Main()
RunAsync(client).GetAwaiter().GetResult();
```

To see if connection between Guilded and the client are initiated, we can subscribe to [Prepared](/references/AbstractGuildedClient_Prepared) or [Connected](/references/BaseGuildedClient_Connected) events:

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

If the bot has successfully connected it should output <q>I have connected</q> and become online.

The bot won't do anything apart from connecting to Guilded. In [Powering up the bot](./powering-bot) document, we are going to give functionality to our bot with text commands.