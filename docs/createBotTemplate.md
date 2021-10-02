---
title: Creating a bot
layout: docs
---

# Getting Started: Creating a bot from template

> It is recommend to learn the basics of C# before making a bot based on Guilded.NET.
{: .note}

Make sure you installed .NET SDK[^1]. .NET 5 or above[^1] are recommended.

[^1]: Download [.NET 5](https://dotnet.microsoft.com/download/dotnet/5.0), [.NET 6](https://dotnet.microsoft.com/download/dotnet/6.0)

## Creating a new bot

Since API isn't public yet, you need to create a new account that is going to be user-bot.

## Installing .NET Core template

### Installing

Type `dotnet new -i Guilded.NET.Templates`[^2] and templates should appear in `dotnet new`.

Now you should be able to see new templates in `dotnet new`

[^2]: Guilded.NET Templates [GitHub](https://github.com/Guilded-NET/Guilded.NET.Templates), [NuGet](https://nuget.org/packages/Guilded.NET.Templates)

## Creating new project

1. Open up your terminal
2. Create new folder for your bot. Use the name of your bot. E.g., `JoesBot`, `EpicBot`, `DungeonBot`, `BirdBot`, `CatBot`.
3. Go to that folder in your terminal.
4. Type `dotnet new guilded.net.client`{: .language-shell}. It will use the name of your folder. If you want to name it other way, use `dotnet new guilded.net.client -n NameOfTheBot`{: .language-shell}
5. Change `config/config.json` file and add your bot's authentication token.

Now launch it with `dotnet run`{: .language-shell}. It should say that you have successfully logged in. Write <q>!ping</q> into the chat and the bot should respond.

## Commands

```shell
dotnet new -i Guilded.NET.Templates
mkdir ProjectName && cd ProjectName
dotnet new guilded.net.client
# Open up ./config/config.json
dotnet run
```

## Understanding the code

[Creating from scratch](./createBotScratch) page explains the code and goes over how to make the bot from scratch instead of the template. It is recommended to check it out if you don't understand the generated code.