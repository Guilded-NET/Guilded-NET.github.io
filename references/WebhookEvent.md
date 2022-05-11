---
title: WebhookEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated."
---

## WebhookEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.

```csharp
public class WebhookEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; WebhookEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [WebhookEvent(HashId, Webhook)](WebhookEvent.WebhookEvent(HashId,Webhook) 'Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId, Guilded.Base.Servers.Webhook)') | Initializes a new instance of [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](WebhookEvent.ChannelId 'Guilded.Base.Events.WebhookEvent.ChannelId') | Gets the identifier of the channel where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is. |
| [CreatedAt](WebhookEvent.CreatedAt 'Guilded.Base.Events.WebhookEvent.CreatedAt') | Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was created. |
| [CreatedBy](WebhookEvent.CreatedBy 'Guilded.Base.Events.WebhookEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [Name](WebhookEvent.Name 'Guilded.Base.Events.WebhookEvent.Name') | Gets the name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [ServerId](WebhookEvent.ServerId 'Guilded.Base.Events.WebhookEvent.ServerId') | Gets the identifier of the server where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') has been created/updated. |
| [Token](WebhookEvent.Token 'Guilded.Base.Events.WebhookEvent.Token') | Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [Webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook') | Gets [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that has been created or updated. |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(MessageContent)](WebhookEvent.CreateMessageAsync(MessageContent) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates [a message](Message 'Guilded.Base.Content.Message') using webhook. |
| [CreateMessageAsync(Embed[])](WebhookEvent.CreateMessageAsync(Embed[]) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(Embed[])#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') using a webhook. |
| [CreateMessageAsync(string, Embed[])](WebhookEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(string,Embed[])#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content using a webhook. |
| [CreateMessageAsync(string, IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(string,IList_Embed_) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(string,IList_Embed_)#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and content using a webhook. |
| [CreateMessageAsync(string)](WebhookEvent.CreateMessageAsync(string) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook. |
| [CreateMessageAsync(IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(IList_Embed_) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(IList_Embed_)#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') using a webhook. |
| [DeleteAsync()](WebhookEvent.DeleteAsync() 'Guilded.Base.Events.WebhookEvent.DeleteAsync()') | Deletes the webhook. |
| [UpdateAsync(string)](WebhookEvent.UpdateAsync(string) 'Guilded.Base.Events.WebhookEvent.UpdateAsync(string)') | Edits the webhook. |

### See Also
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [Member](Member 'Guilded.Base.Servers.Member')