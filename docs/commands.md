---
layout: docs
tags:
- Getting Started
- Guilded.NET
- Docs
- C#
---

# Working with the command framework

> You should read the [Getting Started](./develop-bot) section before reading this guide.

## Why use a command framework ?

A basic way of implementing commands for you app is to listen to every message received perform a switch statement to
match the message's content with a method to be executed (your command). This is what we did in the
[Powering up bot](./powering-bot) section.

Not only is this method really bothersome to
implement, but it also reduces code readability and maintainability.

In order to prevent these issues, Guilded.Net provides a command framework that will handle most of the tedious process
for you, so that you can focus on writing your app's logic.

## Setting up the framework

The command framework comes in an additional package: `Guilded.Commands`. You can install it using a visual installer or
by typing `dotnet add package Guilded.Commands` to add the dependency to your project.

We will now expand the basic bot you wrote. Our starting point will be the end of the [Developing bots](./develop-bot)
section. At the end of it, your code should be something like this:

```csharp
using Guilded;
using Newtonsoft.Json.Linq;

// Get the configuration values
JObject config = JObject.Parse(await File.ReadAllTextAsync("./config/config.json"));

string auth = config.Value<string>("auth")!, 
    prefix = config.Value<string>("prefix")!;

using GuildedBotClient client = new(auth);

client.Prepared
    .Subscribe(me =>
        Console.WriteLine("The bot is prepared!\nLogged in as \"{0}\" with the ID \"{1}\"", me.Name, me.Id)
    );

await client.ConnectAsync();

// Don't close the program when the bot connects
await Task.Delay(-1);
```
{: data-filename="Program.cs"}

The command framework automatically registers commands written in modules, so the first thing we will do is creating
such a module. To do so, just create a new class deriving from [CommandModule](/references/CommandModule).

```csharp
using Guilded.Commads;

public class Module : CommandModule 
{
    
}
```
{: data-filename="Module.cs"}

Now we just have to tell our bot to use this module. To do so, add the following lines in `Program.cs`.

```csharp
using GuildedBotClient client = new(auth); 

Module commands = new();
commands.AddTo(client);
// You can also use client.AddCommands(commands); (found in the Guilded.Commands namespace)

// client.Prepared...
```
{: data-insert="2,3"}
{: data-filename="Program.cs"}

## Adding commands

Now that we are all setup, all that's left to do is to create the commands and write logic for them.
Let's start by creating a simple ping command.

Commands are located in [CommandModules](/references/CommandModule). Each command must be a **public method 
accepting a [CommandEvent](/references/CommandEvent) argument**. In order to have the framework recognize it as a
command, you then need to add the [Command attribute](/references/CommandAttribute). 

Here is what it looks like:

```csharp
[Command]
public async Task Ping(CommandEvent ctx)
{
    /* Command logic goes here */
}
```
{: data-filename="Module.cs"}

> As you may notice, the method here is marked as being `async`. This is not required by the commands framework, but 
> you will probably want to execute some async code in a command (like sending messages).
{: .note}

The event that gets passed as the argument contains the context in which the command was executed. It gives you access 
to stuff like the channel in which the command was executed, and provides various basic methods. You can find more 
details in [the reference](/references/CommandAttribute).

For now, we will just send a basic response.

```csharp
[Command]
public async Task Ping(CommandEvent ctx)
{
    await ctx.ReplyAsync("pong");
}
```
{: data-insert="3"}
{: data-filename="Module.cs"}

Now if you type `ping` in any channel, the bot should respond to your message with `pong`.

## Advanced topics

### Prefixes

Currently, our bot will respond to any message containing exactly `ping`. If users added another bot which has the same
command, there would be no way for them to execute the command on a specific bot. As you may be used to with other bots,
Guilded.Net provides a special feature for this: command prefixes.

Let's add the `!` prefix to our commands.

```csharp
Module commands = new Module();
commands.Prefix = _ => "!";
commands.AddTo(client);
```
{: data-insert="1"}
{: data-filename="Program.cs"}

Now the bot will only respond if you send `!ping`.

> - Each command module can have its own prefix.
> - For setting a prefix, you assign a method that will accept a [MessageEvent](/references/MessageEvent) and will 
>   return a string. This allows context-based prefixes, for things like server-wide prefixes, group-wide prefixes or 
>   even user-specific prefixes.
{: .note}

### Commands in depth

Currently, the command we wrote gets executed when we type in the name of the method. But it is very common to change  
the default name. The command framework allows to you to easily change a command's name or even add aliases for the 
command using the command attribute. As an example, let's create a random command, which will roll a die whenever it is 
executed.

Add the following command in your `Module` class.
```csharp
[Command("dice", Aliases = new[] {"random", "rd"})]
public async Task Random(CommandEvent ctx)
{
    Random rd = new();
    int value = rd.Next(1, 7);
    await ctx.ReplyAsync($"{value}");
}
```
{: data-filename="Module.cs"}

The bot will execute this command whenever we write either `dice`, `random` or `rd` (without forgetting the prefix we 
previously set).

> The first argument of the Command attribute here overrides the name of the command, so if we still want to use the 
> default command name (the name of the method), we have to add it to the aliases.
{: .note}
 
But what if the user wants to roll a die that does not have exactly six faces ? To answer this, the command framework 
supports command arguments and command overloading. The following example illustrates these functionalities.

Add the following command to your `Module` class.
```csharp
[Command("dice", Aliases = new[] {"random", "rd"})]
public async Task Random(CommandEvent ctx, int faces)
{
    Random rd = new();
    int value = rd.Next(1, faces + 1);
    await ctx.ReplyAsync($"{value}");
}
```
{: data-filename="Module.cs"}

Now, if the user wants to roll a die with 20 faces, he can type `dice 20`. The command framework will look through all
the `dice` commands and find one with the corresponding signature (in this case the second one). It will then 
automatically parse the parameters for you and execute the method.

If the user types `dice`, the command framework will execute the command we previously wrote, because it doesn't have 
any arguments (which matches the command sent by the user).

The framework will detect arguments using argument separators: `' '`, `'\t'`, `'\v'`, `'\n'`, `'\r'` are the default 
separators, but you can specify custom ones for the command module by setting the 
[CommandModule.Separators](/references/CommandModule.Separators) property.

Currently, the command framework support the following parameter types:
- `string`
- `int`
- `bool`
- `Guid`
- [`HashId`](/references/HashId)
- `long`
- `float`
- `short`
- `sbyte`
- `byte`
- `double`
- `decimal`
- `DateTime`
