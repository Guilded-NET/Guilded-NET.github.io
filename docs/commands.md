---
layout: docs
description: "Commands are one of the most basic ways to interact with a bot on Guilded. Most bots, if not all, have at least one command."
tags:
    - Functions
    - Commands
    - Guilded.NET
    - C#
---

# Getting Started: Commands

Commands are one of the most basic ways to interact with a bot on Guilded. Most bots, if not all, have at least one command. So how is it done on Guilded.NET? Well, it's simple.

## Setting it up

Guilded.NET's command system is its own package, which means we will need to install it first.

1. Open up your terminal or console. This is either PowerShell, CMD, Windows Terminal (Windows really has endless terminals, huh?), Git Bash, Terminal or anything similar. Make sure to open it up either in your Guilded.NET bot or type `cd "/path/to/Guilded-NET/bot"`{: .language-bash }.
2. Type `dotnet add package Guilded.Commands`

And that's about it. Now we need to set it up in the code.

In the place where your client is set up (`using var client = ...`), add `.AddCommands(new BotCommands(prefix))`. This should look something like this:

```cs
// static void Main()
// ...

using var client = new GuildedBotClient(auth).AddCommands(new BotCommands(prefix));
```
{: data-filename="Program.cs"}

This will show an error that `BotCommands` does not exist, so we will have to create it.

Create a new file with `.cs` extension and create a class in it:

```cs
using Guilded.Commands;

// Can be whatever you want to name it. It is recommended to use the name of your .csproj file without `.csproj` part
namespace ProjectNamespace;

public class BotCommands : CommandModule
{
    // ...
}
```
{: data-filename="BotCommands.cs" }

Any type that will be considered as a command list/command module will always have to extend `Guilded.Commands.CommandModule` like so:

```cs
public class BotCommands : CommandModule
{
    // ... Commands here ...
}
```
{: data-filename="BotCommands.cs" }

We can do the fun part now. Let's do a ping command.

## Method-based commands

To declare a method as a command, we will have to always add `[Command]` attribute. This will also be true for class-based commands, but we will go over them later.

Method-based commands will also always:
- need to have `CommandEvent` parameter as its first parameter, no matter if it contains any arguments or not
- return `Task` value, whether it's asynchronous or not
- never be abstract (it can still be declared as `virtual` or `static`)

All declared commands should be inside `BotCommands` class. Otherwise, they will not be seen by Guilded.NET.

So let's do a quick ping command:

```cs
[Command]
public async Task Ping(CommandEvent invokation) =>
    await invokation.ReplyAsync("Pong!");
```
{: data-filename="BotCommands.cs"}

As you can see, like with `MessageEvent` (`msgCreated` in the previous code), you can use `ReplyAsync` on `CommandEvent` instances. `CommandEvent` extends `MessageEvent`, so anything that works with `MessageEvent` should work with `CommandEvent`.

The name of the command will always automatically be all-lowercase name of the method with `Command` and `Async` removed at the end. `PingCommand`, `PingCommandAsync`, `PingAsync` and `Ping` will all be converted to `ping`.

However, if we don't like the automatically picked name of the command, we can override it by passing a string to `[Command]` attribute:

```cs
public class BotCommands : CommandModule
{
    [Command("online")]
    public async Task Ping(CommandEvent invokation) =>
        await invokation.ReplyAsync("I am online!");
}
```

And we can also add aliases to them:

```cs
[Command(Aliases = new string[] { "pong", "p" })]
public async Task Ping(CommandEvent invokation)
{
    // ...
}

[Command("online", Aliases = new string[] { "on" })]
public async Task IsOnlineCommand(CommandEvent invokation)
{
    // ...
}
```

Besides that, there are non-functional `DescriptionAttribute` and `ExampleAttribute`. These won't do anything by themselves, but it can be used in your `help` command:

```cs
[Description("Says whatever you give it")]
[Command(Aliases = new string[] { "talk" } )]
[ Example("Hello there!"), Example("talk", "Hello there!") ]
public async Task Say(CommandEvent invokation, ...) =>
    ...;
```

Example attribute can have either 1 or 2 arguments. If one argument is passed, then it's the use of the command. If 2 arguments are passed, then 1st argument is the used name or alias of the command in the example and second one is the use of the command:

```cs
[Example("How to use the command")]
[Example("command-alias", "How to use the command")]
```

As you can see, we added an example to `Say` command with arguments, so how do commands with arguments? Well, it's relatively easy. We add an argument of any type with `[CommandParam]`. While `[CommandParam]` is optional, it is recommended to use it for readability reasons. You can also pass a string to `[CommandParam]` to change the name of the argument.

```cs
[Command]
public async Task Add(CommandEvent invokation, [CommandParam] int x, [CommandParam] int y) =>
    await invokation.ReplyAsync($"{x} + {y} = {x + y}");
```

Now if we type <q>/add 10 20</q>, our bot will respond with <q>10 + 20 = 30</q>.

However, if we write <q>/add a 10</q>, the bot will not respond. This is to be expected. The bot will not call the command if the argument count or the arguments are wrong. If we go back and write <q>!ping</q>, the bot will definitely respond with <q>Pong!</q>. However, writing <q>/ping x</q> will not make the bot respond, as the argument count is wrong.

One of the ways to fix this is to make multiple methods with the same name, but different arguments:

```cs
[Command(Aliases = new string[] { "plus" })]
public async Task Add(CommandEvent invokation, [CommandParam] int x, [CommandParam] int y) =>
    await invokation.ReplyAsync($"{x} + {y} = {x + y}");

[Command(Aliases = new string[] { "plus" })]
public async Task Add(CommandEvent invokation, [CommandParam] int x, [CommandParam] int y, [CommandParam] z) =>
    await invokation.ReplyAsync($"{x} + {y} + {z} = {x + y + z}");
```

And we can go on and on and on with it. This can be difficult to scale if you want to accept potentially even hundreds of arguments. For that, we can use "rest argument". It allows us to get one or more arguments in a command:

```cs
[Command]
public async Task Words(CommandEvent invokation, [CommandParam] params string[] words) =>
    await invokation.ReplyAsync($"I got these words: {string.Join(", ", words)}");
```

Writing <q>/words a b c d e f</q> will make the bot respond with <q>I got these words: a, b, c, d, e, f</q>.

Another cool thing you can use is "defautable" arguments, which allow argument count to be at a certain range and have default values for unspecified arguments. These are declared like so:

```cs
[Command]
public async Task Say(CommandEvent invokation, [CommandParam] string word, [CommandParam] uint times = 1) =>
    await invokation.ReplyAsync(string.Join(" ", Enumerable.Repeat(word, times)));
```

So now, we can either do <q>/say Word</q> that would result in <q>Word</q> response or <q>/say Word 3</q> that would result in <q>Word Word Word</q>.

## Class-based commands

While doing some commands, we will eventually come to realization that we need sub-commands as well. And while you can do it the hard-way, Guilded.NET also covers that. This changes from using methods as commands to using classes. The class-based commands will always have to extend `Guilded.Commands.CommandBase` as well.

> Class-based commands still need to be declared in `CommandModule`, however.
{: .note}

```csharp
public class BotCommands : CommandModule
{
    // ...
    [Command("config")]
    public class ServerConfig : CommandBase
    {
        // ... Sub-commands here...
    }
}
```

Commands with sub-commands act similar to `CommandModule` — it's actually the opposite — so we should be able to declare sub-commands the same way we declare commands:

```csharp
[Command("config", Aliases = new string[] { "settings", "conf" })]
public class ServerConfig : CommandBase
{
    [Command]
    public async Task GetPrefix(CommandEvent invokation)
    {
        // ...
    }

    [Command]
    public async Task ChangePrefix(CommandEvent invokation, [CommandParam("new prefix")] string prefix)
    {
        // ...
    }
}
```

Of course, some people might use <q>/config</q> command and it would lead to the bot not having any response. For that, there are "command fallbacks" for that. It should be declared similar to commands, but we have to use `[CommandFallback(...)]` attribute for that instead:

```csharp
[Command("config", Aliases = new string[] { "settings", "conf" })]
public class ServerConfig : CommandBase
{
    // ...

    [CommandFallback(FallbackType.Unspecified)]
    public async Task UnspecifiedSubcommand(CommandEvent invokation)
    {
        // ...
    }
}
```

Of course, we will have to list down all the possible commands. We don't really need to write out all commands and we can use `this.Commands` for that. However, as previously stated, multiple commands with the same name are treated differently, so iterating through command list would end up with duplicated command names in the list. For that, we can use `this.CommandLookup`, which groups together all the commands with matching names (it will not group by aliases, however). Here's an example of its usage:

```csharp
using System.Linq;

// ...

[CommandFallback(FallbackType.Unspecified)]
public async Task UnspecifiedSubcommand(CommandEvent invokation) =>
    await invokation.ReplyAsync($"Please specify a sub-command.\nHere are available sub-commands: `{string.Join("`, `", CommandLookup.Select(group => group.Key))}`");
```
{: data-insert="0" }

This is also the reason why class-based commands require extending `CommandBase`: to provide `this.Commands`, `this.CommandLookup` and other properties. If you declare a method as a static method, these properties will not be available in any way, as the command's instance will be somewhat private/hard to dig out.

And now by writing <q>/config</q> the bot should respond with:

> Please specify a sub-command.
>
> Here are available sub-commands: `prefix`, `another-subcommand`

We can also detect sub-commands that weren't found:

```csharp
[CommandFallback(FallbackType.NoCommandFound)]
public async Task UnknownCommand(CommandEvent invokation) =>
    await invokation.ReplyAsync($"Unknown sub-command `{invokation.CommandName}`");
```

The name of the command will not be given as an argument, but you can get the used name in `CommandEvent`. Once again, commands are unique and aren't fully based on command names, bla bla. So the command won't really be seen as an existing command if bad arguments are given. We can, however, use `CommandLookup` to check if any command by that name exists. The problem with it is that we aliases may be ignored. So, if you have command `blabla` with alias `b` and someone does <q>/config b</q>, it will say that <q>b</q> doesn't exist. In this case, it is better to use `Commands`.

```csharp
[CommandFallback(FallbackType.NoCommandFound)]
public async Task UnknownCommand(CommandEvent invokation)
{
    if (Commands.Any(command => command.HasName(invokation.CommandName)))
    {
        // ... Bad arguments ...
    }
    else
    {
        // ... No such command ...
    }
}
```

This should be improved in the future, but for the time being, this is how it looks.

As previously mentioned, `CommandModule` is similar to `CommandBase` (`CommandModule` extends `CommandBase`), so you can use `[CommandFallback(FallbackType.NoCommandFound)]` the same way.

## Server-wide prefixes

Server-wide prefixes are also available for commands. For that, you need to override `DoCommandsAsync` method. Here's an example:

```csharp
public class BotCommands : CommandModule
{
    // ...

    public async Task<bool> DoCommandsAsync(MessageEvent msgCreated, string globalPrefix, CommandConfiguration config)
    {
        // Fetch the server-wide prefix
        string? serverPrefix = ...;

        return await base.DoCommandsAsync(msgCreated, serverPrefix ?? globalPrefix, config).ConfigureAwait(false);
    }
}
```

I should also note that the code behind fetching commands is not magic and it will invoke `DoCommandsAsync` on any message created. If you want to check if any command has been invoked at all, you can get `bool` value from `base.DoCommandsAsync`.

## That's it

We are done with the commands for now. Happy coding!