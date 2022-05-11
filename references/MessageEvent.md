---
title: MessageEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone creates/posts or updates/edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message') in a channel."
---

## MessageEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone creates/posts or updates/edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message') in a channel.

```csharp
public class MessageEvent : Guilded.Base.Events.MessageEvent<Guilded.Base.Content.Message>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [Guilded.Base.Events.MessageEvent&lt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>') &#129106; MessageEvent

| Constructors | |
| :--- | :--- |
| [MessageEvent(Nullable&lt;HashId&gt;, Message)](MessageEvent.MessageEvent(Nullable_HashId_,Message).md 'Guilded.Base.Events.MessageEvent.MessageEvent(System.Nullable<Guilded.Base.HashId>, Guilded.Base.Content.Message)') | Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId') | Gets the identifier of the channel where the content is. |
| [Content](MessageEvent.Content.md 'Guilded.Base.Events.MessageEvent.Content') | Gets the text contents of the message. |
| [CreatedAt](MessageEvent.CreatedAt.md 'Guilded.Base.Events.MessageEvent.CreatedAt') | Gets the date of when the content was created. |
| [CreatedBy](MessageEvent.CreatedBy.md 'Guilded.Base.Events.MessageEvent.CreatedBy') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content. |
| [CreatedByWebhook](MessageEvent.CreatedByWebhook.md 'Guilded.Base.Events.MessageEvent.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the message. |
| [IsReply](MessageEvent.IsReply.md 'Guilded.Base.Events.MessageEvent.IsReply') | Gets whether the specified message is a reply |
| [IsSystemMessage](MessageEvent.IsSystemMessage.md 'Guilded.Base.Events.MessageEvent.IsSystemMessage') | Gets whether the specified message is a system message. |
| [Type](MessageEvent.Type.md 'Guilded.Base.Events.MessageEvent.Type') | Gets the type of the message. |
| [UpdatedAt](MessageEvent.UpdatedAt.md 'Guilded.Base.Events.MessageEvent.UpdatedAt') | Gets the date of when the message was edited. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint).md 'Guilded.Base.Events.MessageEvent.AddReactionAsync(uint)') | Adds a emote to a message in a channel. |
| [CreateMessageAsync(bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(MessageContent)](MessageEvent.CreateMessageAsync(MessageContent).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(Embed[])](MessageEvent.CreateMessageAsync(Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, bool, bool)](MessageEvent.CreateMessageAsync(string,bool,bool).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guid[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string, Embed[])](MessageEvent.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string)') | Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [DeleteAsync()](MessageEvent.DeleteAsync().md 'Guilded.Base.Events.MessageEvent.DeleteAsync()') | Deletes a message from a channel. |
| [ReplyAsync(bool, bool, Embed[])](MessageEvent.ReplyAsync(bool,bool,Embed[]).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool, Embed[])](MessageEvent.ReplyAsync(string,bool,bool,Embed[]).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string, bool, bool)](MessageEvent.ReplyAsync(string,bool,bool).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [ReplyAsync(string)](MessageEvent.ReplyAsync(string).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string)') | Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')). |
| [UpdateAsync(string)](MessageEvent.UpdateAsync(string).md 'Guilded.Base.Events.MessageEvent.UpdateAsync(string)') | Edits the [content](MessageEvent.UpdateAsync(string).md#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message in a channel. |

### See Also
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')
- [Message](Message.md 'Guilded.Base.Content.Message')