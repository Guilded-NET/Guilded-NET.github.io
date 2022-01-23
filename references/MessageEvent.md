---
title: MessageEvent
layout: references
section: references
tags:
  - references
  - class
description: "

The base for message-related events.

```csharp
public class MessageEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Content.Message>
```"
---

## MessageEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

The base for message-related events.

```csharp
public class MessageEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Content.Message>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>') &#129106; MessageEvent

Derived  
&#8627; [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')  
&#8627; [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')

| Constructors | |
| :--- | :--- |
| [MessageEvent(Message)](MessageEvent.MessageEvent(Message) 'Guilded.NET.Base.Events.MessageEvent.MessageEvent(Guilded.NET.Base.Content.Message)') | Creates a new instance of [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageEvent.ChannelId 'Guilded.NET.Base.Events.MessageEvent.ChannelId') | The identifier of the channel where the content is. |
| [Content](MessageEvent.Content 'Guilded.NET.Base.Events.MessageEvent.Content') | The contents of the message. |
| [CreatedAt](MessageEvent.CreatedAt 'Guilded.NET.Base.Events.MessageEvent.CreatedAt') | The date of when the content was created. |
| [CreatedBy](MessageEvent.CreatedBy 'Guilded.NET.Base.Events.MessageEvent.CreatedBy') | The identifier of the user creator of the content. |
| [CreatedByWebhook](MessageEvent.CreatedByWebhook 'Guilded.NET.Base.Events.MessageEvent.CreatedByWebhook') | The identifier of the webhook creator of the message. |
| [ServerId](MessageEvent.ServerId 'Guilded.NET.Base.Events.MessageEvent.ServerId') | The identifier of the server where the content is. |
| [Type](MessageEvent.Type 'Guilded.NET.Base.Events.MessageEvent.Type') | The type of the message. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.AddReactionAsync(uint)') | Adds a reaction to the message. |
| [CreateMessageAsync(string, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,Guid[]) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, bool, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string)') | Creates a message in a chat. |
| [DeleteMessageAsync()](MessageEvent.DeleteMessageAsync() 'Guilded.NET.Base.Events.MessageEvent.DeleteMessageAsync()') | Deletes the message. |
| [RemoveReactionAsync(uint)](MessageEvent.RemoveReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.RemoveReactionAsync(uint)') | Removes a reaction from the message. |
| [ReplyAsync(string, bool)](MessageEvent.ReplyAsync(string,bool) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string, bool)') | Replies to the message in the chat. |
| [ReplyAsync(string)](MessageEvent.ReplyAsync(string) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string)') | Replies to the message in the chat. |
| [UpdateMessageAsync(string)](MessageEvent.UpdateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(string)') | Updates the message. |

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')