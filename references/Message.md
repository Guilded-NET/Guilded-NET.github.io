---
title: Message
layout: references
section: references
tags:
  - references
  - class
description: "

A message posted in the chat.

```csharp
public class Message : Guilded.NET.Base.Content.ChannelContent<System.Guid, System.Nullable<Guilded.NET.Base.HashId>>,
Guilded.NET.Base.Content.IUpdatableContent,
Guilded.NET.Base.Content.IWebhookCreatable,
Guilded.NET.Base.Content.IReactibleContent
```"
---

## Message Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

A message posted in the chat.

```csharp
public class Message : Guilded.NET.Base.Content.ChannelContent<System.Guid, System.Nullable<Guilded.NET.Base.HashId>>,
Guilded.NET.Base.Content.IUpdatableContent,
Guilded.NET.Base.Content.IWebhookCreatable,
Guilded.NET.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') &#129106; Message

Implements [IUpdatableContent](IUpdatableContent 'Guilded.NET.Base.Content.IUpdatableContent'), [IWebhookCreatable](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable'), [IReactibleContent](IReactibleContent 'Guilded.NET.Base.Content.IReactibleContent')

### Remarks
  
An existing/a cached message that can be found in a chat. This can be found in chat channels, voice channels, stream channels and their equivalent threads.  
  
This currently includes both messages of types [Default](MessageType#Guilded.NET.Base.Content.MessageType.Default 'Guilded.NET.Base.Content.MessageType.Default') and [System](MessageType#Guilded.NET.Base.Content.MessageType.System 'Guilded.NET.Base.Content.MessageType.System'), but it could be changed in the future.

| Constructors | |
| :--- | :--- |
| [Message(Guid, Guid, Nullable&lt;HashId&gt;, string, IList&lt;Guid&gt;, bool, HashId, Nullable&lt;Guid&gt;, DateTime, MessageType)](Message.Message(Guid,Guid,Nullable_HashId_,string,IList_Guid_,bool,HashId,Nullable_Guid_,DateTime,MessageType) 'Guilded.NET.Base.Content.Message.Message(System.Guid, System.Guid, System.Nullable<Guilded.NET.Base.HashId>, string, System.Collections.Generic.IList<System.Guid>, bool, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime, Guilded.NET.Base.Content.MessageType)') | Creates a new instance of [Message](Message 'Guilded.NET.Base.Content.Message') with provided details. |

| Fields | |
| :--- | :--- |
| [ContentLimit](Message.ContentLimit 'Guilded.NET.Base.Content.Message.ContentLimit') | The limit of the message content |

| Properties | |
| :--- | :--- |
| [Content](Message.Content 'Guilded.NET.Base.Content.Message.Content') | The contents of the message. |
| [CreatedByWebhook](Message.CreatedByWebhook 'Guilded.NET.Base.Content.Message.CreatedByWebhook') | The identifier of the webhook creator of the message. |
| [IsPrivate](Message.IsPrivate 'Guilded.NET.Base.Content.Message.IsPrivate') | Whether the reply is private. |
| [IsReply](Message.IsReply 'Guilded.NET.Base.Content.Message.IsReply') | Whether the specified message is a reply |
| [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') | The list of messages being replied to. |
| [Type](Message.Type 'Guilded.NET.Base.Content.Message.Type') | The type of the message. |
| [UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') | The date of when the message was updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message.AddReactionAsync(uint) 'Guilded.NET.Base.Content.Message.AddReactionAsync(uint)') | Adds a reaction to the message. |
| [CreateMessageAsync(string, bool, Guid[])](Message.CreateMessageAsync(string,bool,Guid[]) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, bool, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)') | Creates a message in a chat. |
| [DeleteMessageAsync()](Message.DeleteMessageAsync() 'Guilded.NET.Base.Content.Message.DeleteMessageAsync()') | Deletes the message. |
| [RemoveReactionAsync(uint)](Message.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Message.RemoveReactionAsync(uint)') | Removes a reaction from the message. |
| [ReplyAsync(string, bool)](Message.ReplyAsync(string,bool) 'Guilded.NET.Base.Content.Message.ReplyAsync(string, bool)') | Replies to the message in the chat. |
| [ReplyAsync(string)](Message.ReplyAsync(string) 'Guilded.NET.Base.Content.Message.ReplyAsync(string)') | Replies to the message in the chat. |
| [UpdateMessageAsync(string)](Message.UpdateMessageAsync(string) 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string)') | Updates the message. |

### See Also
- [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')
- [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')