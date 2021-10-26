---
title: Creating a bot
layout: docs
---

# Getting Started: Creating a bot from template

> It is recommend to learn the basics of C# before making a bot based on Guilded.NET.
{: .note}

Make sure you installed [.NET SDK](https://dotnet.microsoft.com/download/dotnet). .NET 5+ is recommended.

## Creating a new bot

Make sure to create an auth token for your bot for this tutorial.

### Installing

Type [`dotnet new -i Guilded.NET.Templates`](https://nuget.org/packages/Guilded.NET.Templates) and templates should appear in `dotnet new`.

Now you should be able to see new templates in `dotnet new`

## Creating new project

Create a new folder with the name of your bot(PascalCase preferred, `JoesBot`, `EpicBot`, `DungeonBot`, etc.). Open up the folder with your terminal/console(`cd path/to/the/bot/folder`{: .language-bash}). Type `dotnet new guilded.net.client` and it will automatically create a bot project with the name being the name of the folder. If you want to name it other way, use `dotnet new guilded.net.client -n NameOfTheBot`{: .language-shell}.

Now we have a program containing bot. Make sure to edit `config/config.json` and replace auth property's value with your token:

```json
{
    "auth": "secret",
    "prefix": "!"
}
```
{: data-filename="config.json"}

Changed to:

```json
{
    "auth": "your_auth_token_here",
    "prefix": "!"
}
```
{: data-filename="config.json"}

You can now launch the bot using `dotnet run`. Wait for it to say <q>I have successfully logged in!</q> and type <q>!ping</q> in the channel where your bot can see. The bot should respond with <q>Pong!</q>.

If you want a set of commands that quickly sum up the above tutorial:

```shell
dotnet new -i Guilded.NET.Templates
mkdir ProjectName && cd ProjectName
dotnet new guilded.net.client
# Open up ./config/config.json with emacs, nano, vim, VSC, VS, notepad or any other file or code editor
dotnet run
```

## Understanding the code

[Creating from scratch](./createBotScratch) page explains the code and goes over how to make the bot from scratch instead of the template. It is recommended to check it out if you don't understand the generated code.