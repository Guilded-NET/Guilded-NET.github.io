---
title: Message
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a message posted in a chat channel or alike."
---

## Message Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents a message posted in a chat channel or alike.

```csharp
public class Message : Guilded.Base.Content.ChannelContent<Guid, System.Nullable<Guilded.Base.HashId>>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IWebhookCreatable,
Guilded.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; Message

Implements [IUpdatableContent](IUpdatableContent.md 'Guilded.Base.Content.IUpdatableContent'), [IWebhookCreatable](IWebhookCreatable.md 'Guilded.Base.Content.IWebhookCreatable'), [IReactibleContent](IReactibleContent.md 'Guilded.Base.Content.IReactibleContent')

### Remarks
  
Either an existing or a cached message. It can be found in chat, voice and stream channels, as well as threads with the same channel types as described.  
  
This currently includes both messages of types [Default](MessageType.md#Guilded.Base.Content.MessageType.Default 'Guilded.Base.Content.MessageType.Default') and [System](MessageType.md#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System'), but it could be changed in the future.

| Constructors | |
| :--- | :--- |
| [Message(Guid, Guid, Nullable&lt;HashId&gt;, string, IList&lt;Guid&gt;, IList&lt;Embed&gt;, bool, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;, MessageType)](Message.Message(Guid,Guid,Nullable_HashId_,string,IList_Guid_,IList_Embed_,bool,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_,MessageType).md 'Guilded.Base.Content.Message.Message(Guid, Guid, System.Nullable<Guilded.Base.HashId>, string, System.Collections.Generic.IList<Guid>, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, bool, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>, Guilded.Base.Content.MessageType)') | Initializes a new instance of [Message](Message.md 'Guilded.Base.Content.Message') from the specified JSON properties. |

| Fields | |
| :--- | :--- |
| [EmbedLimit](Message.EmbedLimit.md 'Guilded.Base.Content.Message.EmbedLimit') | The count of how many [embeds](Message.Embeds.md 'Guilded.Base.Content.Message.Embeds') there can be in [a message](Message.md 'Guilded.Base.Content.Message'). |
| [ReplyLimit](Message.ReplyLimit.md 'Guilded.Base.Content.Message.ReplyLimit') | The count of how many [messages](Message.md 'Guilded.Base.Content.Message') can be replied to per [message](Message.md 'Guilded.Base.Content.Message'). |
| [TextLimit](Message.TextLimit.md 'Guilded.Base.Content.Message.TextLimit') | The count of how many characters there can be in [message's content](Message.Content.md 'Guilded.Base.Content.Message.Content'). |

| Properties | |
| :--- | :--- |
| [Content](Message.Content.md 'Guilded.Base.Content.Message.Content') | Gets the text contents of the message. |
| [CreatedByWebhook](Message.CreatedByWebhook.md 'Guilded.Base.Content.Message.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the message. |
| [Embeds](Message.Embeds.md 'Guilded.Base.Content.Message.Embeds') | Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains. |
| [IsPrivate](Message.IsPrivate.md 'Guilded.Base.Content.Message.IsPrivate') | Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private. |
| [IsReply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') | Gets whether the specified message is a reply |
| [IsSystemMessage](Message.IsSystemMessage.md 'Guilded.Base.Content.Message.IsSystemMessage') | Gets whether the specified message is a system message. |
| [ReplyMessageIds](Message.ReplyMessageIds.md 'Guilded.Base.Content.Message.ReplyMessageIds') | Gets the list of [messages](Message.md 'Guilded.Base.Content.Message') being replied to. |
| [Type](Message.Type.md 'Guilded.Base.Content.Message.Type') | Gets the type of the message. |
| [UpdatedAt](Message.UpdatedAt.md 'Guilded.Base.Content.Message.UpdatedAt') | Gets the date of when the message was edited. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message.AddReactionAsync(uint).md 'Guilded.Base.Content.Message.AddReactionAsync(uint)') | Adds a [emote](Message.AddReactionAsync(uint).md#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to a message in a channel. |
| [CreateMessageAsync(bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(bool,bool,Guid[],Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(MessageContent)](Message.CreateMessageAsync(MessageContent).md 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(Embed[])](Message.CreateMessageAsync(Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[])](Message.CreateMessageAsync(string,bool,bool,Guid[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool)](Message.CreateMessageAsync(string,bool,bool).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Embed[])](Message.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string)](Message.CreateMessageAsync(string).md 'Guilded.Base.Content.Message.CreateMessageAsync(string)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [DeleteAsync()](Message.DeleteAsync().md 'Guilded.Base.Content.Message.DeleteAsync()') | Deletes a message from a channel. |
| [ReplyAsync(bool, bool, Embed[])](Message.ReplyAsync(bool,bool,Embed[]).md 'Guilded.Base.Content.Message.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool, Embed[])](Message.ReplyAsync(string,bool,bool,Embed[]).md 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool)](Message.ReplyAsync(string,bool,bool).md 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string)](Message.ReplyAsync(string).md 'Guilded.Base.Content.Message.ReplyAsync(string)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [UpdateAsync(string)](Message.UpdateAsync(string).md 'Guilded.Base.Content.Message.UpdateAsync(string)') | Edits the [content](Message.UpdateAsync(string).md#Guilded.Base.Content.Message.UpdateAsync(string).content 'Guilded.Base.Content.Message.UpdateAsync(string).content') of a message in a channel. |

### See Also
- [Doc](Doc.md 'Guilded.Base.Content.Doc')
- [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')
- [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')