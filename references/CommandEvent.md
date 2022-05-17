---
title: CommandEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs once someone invokes a command."
---

## CommandEvent Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents an event that occurs once someone invokes a command.

```csharp
public class CommandEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; CommandEvent

Derived  
&#8627; [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')

| Constructors | |
| :--- | :--- |
| [CommandEvent(RootCommandContext, string, IEnumerable&lt;string&gt;)](CommandEvent.CommandEvent(RootCommandContext,string,IEnumerable_string_) 'Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>)') | Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent'). |

| Properties | |
| :--- | :--- |
| [Arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') | Gets the enumerable of string arguments that were given to the command. |
| [ChannelId](CommandEvent.ChannelId 'Guilded.Commands.CommandEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') are. |
| [CommandName](CommandEvent.CommandName 'Guilded.Commands.CommandEvent.CommandName') | Gets the name of that was used in the command. |
| [Content](CommandEvent.Content 'Guilded.Commands.CommandEvent.Content') | Gets the text contents of [the message](Message 'Guilded.Base.Content.Message'). |
| [CreatedAt](CommandEvent.CreatedAt 'Guilded.Commands.CommandEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') were created. |
| [CreatedBy](CommandEvent.CreatedBy 'Guilded.Commands.CommandEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2'). |
| [CreatedByWebhook](CommandEvent.CreatedByWebhook 'Guilded.Commands.CommandEvent.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message. |
| [Embeds](CommandEvent.Embeds 'Guilded.Commands.CommandEvent.Embeds') | Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains. |
| [IsPrivate](CommandEvent.IsPrivate 'Guilded.Commands.CommandEvent.IsPrivate') | Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private. |
| [IsReply](CommandEvent.IsReply 'Guilded.Commands.CommandEvent.IsReply') | Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message. |
| [Message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message') | Gets the message received from the event. |
| [MessageEvent](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent') | Gets the message event that invoked the command. |
| [Prefix](CommandEvent.Prefix 'Guilded.Commands.CommandEvent.Prefix') | Gets the prefix that has been used on the command. |
| [ReplyMessageIds](CommandEvent.ReplyMessageIds 'Guilded.Commands.CommandEvent.ReplyMessageIds') | Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to. |
| [RootArguments](CommandEvent.RootArguments 'Guilded.Commands.CommandEvent.RootArguments') | Gets the enumerable of string arguments that were given to the root-level command in [the message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message'). |
| [RootCommand](CommandEvent.RootCommand 'Guilded.Commands.CommandEvent.RootCommand') | Getss the most-top command that was invoked. |
| [RootCommandName](CommandEvent.RootCommandName 'Guilded.Commands.CommandEvent.RootCommandName') | Gets the name of the root-level command that was used in [the message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message'). |
| [ServerId](CommandEvent.ServerId 'Guilded.Commands.CommandEvent.ServerId') | Gets the identifier of the server where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') are. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](CommandEvent.AddReactionAsync(uint) 'Guilded.Commands.CommandEvent.AddReactionAsync(uint)') | Adds emote to the message. |
| [CreateMessageAsync(bool, bool, Guid[], Embed[])](CommandEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(MessageContent)](CommandEvent.CreateMessageAsync(MessageContent) 'Guilded.Commands.CommandEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(Embed[])](CommandEvent.CreateMessageAsync(Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[], Embed[])](CommandEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[])](CommandEvent.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string, bool, bool)](CommandEvent.CreateMessageAsync(string,bool,bool) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string, Guid[])](CommandEvent.CreateMessageAsync(string,Guid[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string, Embed[])](CommandEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [CreateMessageAsync(string)](CommandEvent.CreateMessageAsync(string) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [DeleteAsync()](CommandEvent.DeleteAsync() 'Guilded.Commands.CommandEvent.DeleteAsync()') | Deletes the message. |
| [ReplyAsync(bool, bool, Embed[])](CommandEvent.ReplyAsync(bool,bool,Embed[]) 'Guilded.Commands.CommandEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [ReplyAsync(string, bool, bool, Embed[])](CommandEvent.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [ReplyAsync(string, bool, bool)](CommandEvent.ReplyAsync(string,bool,bool) 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [ReplyAsync(string)](CommandEvent.ReplyAsync(string) 'Guilded.Commands.CommandEvent.ReplyAsync(string)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')). |
| [UpdateAsync(string)](CommandEvent.UpdateAsync(string) 'Guilded.Commands.CommandEvent.UpdateAsync(string)') | Edits the [content](CommandEvent.UpdateAsync(string)#Guilded.Commands.CommandEvent.UpdateAsync(string).content 'Guilded.Commands.CommandEvent.UpdateAsync(string).content') of a message. |

### See Also
- [Message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message')
- [MessageEvent](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent')
- [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')