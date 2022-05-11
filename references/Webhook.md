---
title: Webhook
layout: references
section: references
tags:
  - references
  - class
description: "

A channel webhook."
---

## Webhook Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers.md 'Guilded.Base.Servers')

A channel webhook.

```csharp
public class Webhook : Guilded.Base.ClientObject,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; Webhook

Implements [ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [Webhook(Guid, string, string, Guid, HashId, DateTime, HashId, Nullable&lt;DateTime&gt;)](Webhook.Webhook(Guid,string,string,Guid,HashId,DateTime,HashId,Nullable_DateTime_).md 'Guilded.Base.Servers.Webhook.Webhook(Guid, string, string, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.HashId, System.Nullable<System.DateTime>)') | Initializes a new instance of [Webhook](Webhook.md 'Guilded.Base.Servers.Webhook') with the specified properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](Webhook.ChannelId.md 'Guilded.Base.Servers.Webhook.ChannelId') | Gets the identifier of the channel where the webhook is. |
| [CreatedAt](Webhook.CreatedAt.md 'Guilded.Base.Servers.Webhook.CreatedAt') | Gets the date when the webhook was created. |
| [CreatedBy](Webhook.CreatedBy.md 'Guilded.Base.Servers.Webhook.CreatedBy') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the webhook. |
| [DeletedAt](Webhook.DeletedAt.md 'Guilded.Base.Servers.Webhook.DeletedAt') | Gets the date when the webhook was deleted. |
| [Id](Webhook.Id.md 'Guilded.Base.Servers.Webhook.Id') | Gets the identifier of the webhook. |
| [Name](Webhook.Name.md 'Guilded.Base.Servers.Webhook.Name') | Gets the name of the webhook. |
| [ServerId](Webhook.ServerId.md 'Guilded.Base.Servers.Webhook.ServerId') | Gets the identifier of the server where the webhook is. |
| [Token](Webhook.Token.md 'Guilded.Base.Servers.Webhook.Token') | Gets the token of the webhook. |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(MessageContent)](Webhook.CreateMessageAsync(MessageContent).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a [message](Webhook.CreateMessageAsync(MessageContent).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook. |
| [CreateMessageAsync(Embed[])](Webhook.CreateMessageAsync(Embed[]).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a message with content containing [embeds](Webhook.CreateMessageAsync(Embed[]).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') in a chat using a webhook. |
| [CreateMessageAsync(string, Embed[])](Webhook.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a message with content containing [embeds](Webhook.CreateMessageAsync(string,Embed[]).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content in a chat using a webhook. |
| [CreateMessageAsync(string, IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(string,IList_Embed_).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a message with content containing [embeds](Webhook.CreateMessageAsync(string,IList_Embed_).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and content in a chat using a webhook. |
| [CreateMessageAsync(string)](Webhook.CreateMessageAsync(string).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string)') | Creates a message with content containing only content in a chat using a webhook. |
| [CreateMessageAsync(IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(IList_Embed_).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a message with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') in a chat using a webhook. |
| [DeleteAsync()](Webhook.DeleteAsync().md 'Guilded.Base.Servers.Webhook.DeleteAsync()') | Deletes the specified webhook. |
| [UpdateAsync(string)](Webhook.UpdateAsync(string).md 'Guilded.Base.Servers.Webhook.UpdateAsync(string)') | Updates the specified webhook in the specified server. |
