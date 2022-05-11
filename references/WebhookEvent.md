---
title: WebhookEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated."
---

## WebhookEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.

```csharp
public class WebhookEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; WebhookEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [WebhookEvent(HashId, Webhook)](WebhookEvent.WebhookEvent(HashId,Webhook).md 'Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId, Guilded.Base.Servers.Webhook)') | Initializes a new instance of [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](WebhookEvent.ChannelId.md 'Guilded.Base.Events.WebhookEvent.ChannelId') | Gets the identifier of the channel where the webhook is. |
| [CreatedAt](WebhookEvent.CreatedAt.md 'Guilded.Base.Events.WebhookEvent.CreatedAt') | Gets the date when the webhook was created. |
| [CreatedBy](WebhookEvent.CreatedBy.md 'Guilded.Base.Events.WebhookEvent.CreatedBy') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the webhook. |
| [Name](WebhookEvent.Name.md 'Guilded.Base.Events.WebhookEvent.Name') | Gets the name of the webhook. |
| [ServerId](WebhookEvent.ServerId.md 'Guilded.Base.Events.WebhookEvent.ServerId') | Gets the identifier of the server where the webhook has been created/updated. |
| [Token](WebhookEvent.Token.md 'Guilded.Base.Events.WebhookEvent.Token') | Gets the token of the webhook. |
| [Webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') | Gets the webhook that has been created or updated. |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(MessageContent)](WebhookEvent.CreateMessageAsync(MessageContent).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a [message](WebhookEvent.CreateMessageAsync(MessageContent).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook. |
| [CreateMessageAsync(Embed[])](WebhookEvent.CreateMessageAsync(Embed[]).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(Embed[]).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') in a chat using a webhook. |
| [CreateMessageAsync(string, Embed[])](WebhookEvent.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(string,Embed[]).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content in a chat using a webhook. |
| [CreateMessageAsync(string, IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(string,IList_Embed_).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(string,IList_Embed_).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and content in a chat using a webhook. |
| [CreateMessageAsync(string)](WebhookEvent.CreateMessageAsync(string).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string)') | Creates a message with content containing only content in a chat using a webhook. |
| [CreateMessageAsync(IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(IList_Embed_).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(IList_Embed_).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') in a chat using a webhook. |
| [DeleteAsync()](WebhookEvent.DeleteAsync().md 'Guilded.Base.Events.WebhookEvent.DeleteAsync()') | Deletes the specified webhook. |
| [UpdateAsync(string)](WebhookEvent.UpdateAsync(string).md 'Guilded.Base.Events.WebhookEvent.UpdateAsync(string)') | Updates the specified webhook in the specified server. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')