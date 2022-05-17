---
title: Message
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a message posted in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Chat 'Guilded.Base.Servers.ChannelType.Chat') or alike."
---

## Message Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a message posted in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Chat 'Guilded.Base.Servers.ChannelType.Chat') or alike.

```csharp
public class Message : Guilded.Base.Content.ChannelContent<Guid, System.Nullable<Guilded.Base.HashId>>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IWebhookCreatable,
Guilded.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; Message

Implements [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent'), [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable'), [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')

### Remarks
  
Either an existing or a cached message. It can be found in chat, voice and stream channels, as well as threads with the same channel types as described.  
  
This currently includes both messages of types [Default](MessageType#Guilded.Base.Content.MessageType.Default 'Guilded.Base.Content.MessageType.Default') and [System](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System'), but it could be changed in the future.

| Constructors | |
| :--- | :--- |
| [Message(Guid, Guid, HashId, DateTime, MessageType, Nullable&lt;HashId&gt;, IList&lt;Guid&gt;, string, IList&lt;Embed&gt;, bool, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;)](Message.Message(Guid,Guid,HashId,DateTime,MessageType,Nullable_HashId_,IList_Guid_,string,IList_Embed_,bool,Nullable_Guid_,Nullable_DateTime_) 'Guilded.Base.Content.Message.Message(Guid, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.Content.MessageType, System.Nullable<Guilded.Base.HashId>, System.Collections.Generic.IList<Guid>, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, bool, System.Nullable<Guid>, System.Nullable<System.DateTime>)') | Initializes a new instance of [Message](Message 'Guilded.Base.Content.Message') from the specified JSON properties. |

| Fields | |
| :--- | :--- |
| [EmbedLimit](Message.EmbedLimit 'Guilded.Base.Content.Message.EmbedLimit') | The count of how many [embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds') there can be in [a message](Message 'Guilded.Base.Content.Message'). |
| [ReplyLimit](Message.ReplyLimit 'Guilded.Base.Content.Message.ReplyLimit') | The count of how many [messages](Message 'Guilded.Base.Content.Message') can be replied to per [message](Message 'Guilded.Base.Content.Message'). |
| [TextLimit](Message.TextLimit 'Guilded.Base.Content.Message.TextLimit') | The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [message's content](Message.Content 'Guilded.Base.Content.Message.Content'). |

| Properties | |
| :--- | :--- |
| [Content](Message.Content 'Guilded.Base.Content.Message.Content') | Gets the text contents of [the message](Message 'Guilded.Base.Content.Message'). |
| [CreatedByWebhook](Message.CreatedByWebhook 'Guilded.Base.Content.Message.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message. |
| [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds') | Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains. |
| [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') | Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private. |
| [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') | Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message. |
| [IsSilent](Message.IsSilent 'Guilded.Base.Content.Message.IsSilent') | Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user. |
| [IsSystemMessage](Message.IsSystemMessage 'Guilded.Base.Content.Message.IsSystemMessage') | Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System'). |
| [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') | Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to. |
| [Type](Message.Type 'Guilded.Base.Content.Message.Type') | Gets the type of [the message](Message 'Guilded.Base.Content.Message'). |
| [UpdatedAt](Message.UpdatedAt 'Guilded.Base.Content.Message.UpdatedAt') | Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message.AddReactionAsync(uint) 'Guilded.Base.Content.Message.AddReactionAsync(uint)') | Adds [emote](Message.AddReactionAsync(uint)#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to the message. |
| [CreateMessageAsync(bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(MessageContent)](Message.CreateMessageAsync(MessageContent) 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(Embed[])](Message.CreateMessageAsync(Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[])](Message.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool)](Message.CreateMessageAsync(string,bool,bool) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Embed[])](Message.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.Base.Content.Message.CreateMessageAsync(string)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [DeleteAsync()](Message.DeleteAsync() 'Guilded.Base.Content.Message.DeleteAsync()') | Deletes the message. |
| [ReplyAsync(bool, bool, Embed[])](Message.ReplyAsync(bool,bool,Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(Embed[])](Message.ReplyAsync(Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool, Embed[])](Message.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool)](Message.ReplyAsync(string,bool,bool) 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string)](Message.ReplyAsync(string) 'Guilded.Base.Content.Message.ReplyAsync(string)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [UpdateAsync(MessageContent)](Message.UpdateAsync(MessageContent) 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent)') | Edits the [content](Message.UpdateAsync(MessageContent)#Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content') of a message. |
| [UpdateAsync(Embed[])](Message.UpdateAsync(Embed[]) 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Embeds.Embed[])') | Edits the content of a message. |
| [UpdateAsync(string, Embed[])](Message.UpdateAsync(string,Embed[]) 'Guilded.Base.Content.Message.UpdateAsync(string, Guilded.Base.Embeds.Embed[])') | Edits the [content](Message.UpdateAsync(string,Embed[])#Guilded.Base.Content.Message.UpdateAsync(string,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.UpdateAsync(string, Guilded.Base.Embeds.Embed[]).content') of a message. |
| [UpdateAsync(string)](Message.UpdateAsync(string) 'Guilded.Base.Content.Message.UpdateAsync(string)') | Edits the [content](Message.UpdateAsync(string)#Guilded.Base.Content.Message.UpdateAsync(string).content 'Guilded.Base.Content.Message.UpdateAsync(string).content') of a message. |

### See Also
- [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')
- [MessageType](MessageType 'Guilded.Base.Content.MessageType')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')