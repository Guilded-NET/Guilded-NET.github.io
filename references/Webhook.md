---
title: Webhook
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a channel webhook. This is a bot-like [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') member that creates messages, list items or forum threads once its URL is invoked."
---

## Webhook Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

Represents a channel webhook. This is a bot-like [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') member that creates messages, list items or forum threads once its URL is invoked.

```csharp
public class Webhook : Guilded.Base.ClientObject,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; Webhook

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [Webhook(Guid, string, Guid, HashId, DateTime, HashId, string, Nullable&lt;DateTime&gt;)](Webhook.Webhook(Guid,string,Guid,HashId,DateTime,HashId,string,Nullable_DateTime_) 'Guilded.Base.Servers.Webhook.Webhook(Guid, string, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.HashId, string, System.Nullable<System.DateTime>)') | Initializes a new instance of [Webhook](Webhook 'Guilded.Base.Servers.Webhook') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](Webhook.ChannelId 'Guilded.Base.Servers.Webhook.ChannelId') | Gets the identifier of the channel where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is. |
| [CreatedAt](Webhook.CreatedAt 'Guilded.Base.Servers.Webhook.CreatedAt') | Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was created. |
| [CreatedBy](Webhook.CreatedBy 'Guilded.Base.Servers.Webhook.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [DeletedAt](Webhook.DeletedAt 'Guilded.Base.Servers.Webhook.DeletedAt') | Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was deleted. |
| [Id](Webhook.Id 'Guilded.Base.Servers.Webhook.Id') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [Name](Webhook.Name 'Guilded.Base.Servers.Webhook.Name') | Gets the name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |
| [ServerId](Webhook.ServerId 'Guilded.Base.Servers.Webhook.ServerId') | Gets the identifier of the server where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is. |
| [Token](Webhook.Token 'Guilded.Base.Servers.Webhook.Token') | Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook'). |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(MessageContent)](Webhook.CreateMessageAsync(MessageContent) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates [a message](Message 'Guilded.Base.Content.Message') using webhook. |
| [CreateMessageAsync(Embed[])](Webhook.CreateMessageAsync(Embed[]) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(Embed[])#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') using a webhook. |
| [CreateMessageAsync(string, Embed[])](Webhook.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(string,Embed[])#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content using a webhook. |
| [CreateMessageAsync(string, IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(string,IList_Embed_) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(string,IList_Embed_)#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and content using a webhook. |
| [CreateMessageAsync(string)](Webhook.CreateMessageAsync(string) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook. |
| [CreateMessageAsync(IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(IList_Embed_) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_)#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') using a webhook. |
| [DeleteAsync()](Webhook.DeleteAsync() 'Guilded.Base.Servers.Webhook.DeleteAsync()') | Deletes the webhook. |
| [UpdateAsync(string)](Webhook.UpdateAsync(string) 'Guilded.Base.Servers.Webhook.UpdateAsync(string)') | Edits the webhook. |

### See Also
- [Member](Member 'Guilded.Base.Servers.Member')
- [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')
- [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')