---
title: MessageEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone creates or edits [a message](Message 'Guilded.Base.Content.Message')."
---

## MessageEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone creates or edits [a message](Message 'Guilded.Base.Content.Message').

```csharp
public class MessageEvent : Guilded.Base.Events.MessageEvent<Guilded.Base.Content.Message>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>')[Message](Message 'Guilded.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>') &#129106; MessageEvent

| Constructors | |
| :--- | :--- |
| [MessageEvent(Message, Nullable&lt;HashId&gt;)](MessageEvent.MessageEvent(Message,Nullable_HashId_) 'Guilded.Base.Events.MessageEvent.MessageEvent(Guilded.Base.Content.Message, System.Nullable<Guilded.Base.HashId>)') | Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [Content](MessageEvent.Content 'Guilded.Base.Events.MessageEvent.Content') | Gets the text contents of [the message](Message 'Guilded.Base.Content.Message'). |
| [CreatedAt](MessageEvent.CreatedAt 'Guilded.Base.Events.MessageEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](MessageEvent.CreatedBy 'Guilded.Base.Events.MessageEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [CreatedByWebhook](MessageEvent.CreatedByWebhook 'Guilded.Base.Events.MessageEvent.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message. |
| [Embeds](MessageEvent.Embeds 'Guilded.Base.Events.MessageEvent.Embeds') | Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains. |
| [IsPrivate](MessageEvent.IsPrivate 'Guilded.Base.Events.MessageEvent.IsPrivate') | Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private. |
| [IsReply](MessageEvent.IsReply 'Guilded.Base.Events.MessageEvent.IsReply') | Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message. |
| [IsSilent](MessageEvent.IsSilent 'Guilded.Base.Events.MessageEvent.IsSilent') | Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user. |
| [IsSystemMessage](MessageEvent.IsSystemMessage 'Guilded.Base.Events.MessageEvent.IsSystemMessage') | Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System'). |
| [Mentions](MessageEvent.Mentions 'Guilded.Base.Events.MessageEvent.Mentions') | Gets [the mentions](Message.Mentions 'Guilded.Base.Content.Message.Mentions') found in [the content](Message.Content 'Guilded.Base.Content.Message.Content'). |
| [ReplyMessageIds](MessageEvent.ReplyMessageIds 'Guilded.Base.Events.MessageEvent.ReplyMessageIds') | Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to. |
| [Type](MessageEvent.Type 'Guilded.Base.Events.MessageEvent.Type') | Gets the type of [the message](Message 'Guilded.Base.Content.Message'). |
| [UpdatedAt](MessageEvent.UpdatedAt 'Guilded.Base.Events.MessageEvent.UpdatedAt') | Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint) 'Guilded.Base.Events.MessageEvent.AddReactionAsync(uint)') | Adds emote to the message. |
| [CreateMessageAsync(bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(MessageContent)](MessageEvent.CreateMessageAsync(MessageContent) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(Embed[])](MessageEvent.CreateMessageAsync(Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool)](MessageEvent.CreateMessageAsync(string,bool,bool) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Embed[])](MessageEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [DeleteAsync()](MessageEvent.DeleteAsync() 'Guilded.Base.Events.MessageEvent.DeleteAsync()') | Deletes the message. |
| [RemoveReactionAsync(uint)](MessageEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.MessageEvent.RemoveReactionAsync(uint)') | Removes emote from the message. |
| [ReplyAsync(bool, bool, Embed[])](MessageEvent.ReplyAsync(bool,bool,Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(Embed[])](MessageEvent.ReplyAsync(Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool, Embed[])](MessageEvent.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool)](MessageEvent.ReplyAsync(string,bool,bool) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string)](MessageEvent.ReplyAsync(string) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [UpdateAsync(string)](MessageEvent.UpdateAsync(string) 'Guilded.Base.Events.MessageEvent.UpdateAsync(string)') | Edits the [content](MessageEvent.UpdateAsync(string)#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message. |

### See Also
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.Base.Content.Message')