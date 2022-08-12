---
title: GuildedWebhookClient
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') for [webhook](Webhook 'Guilded.Base.Servers.Webhook') execution."
---

## GuildedWebhookClient Class
##### **Assembly:** `Guilded`<br/>**Namespace:** [`Guilded`](Guilded 'Guilded')

Represents the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') for [webhook](Webhook 'Guilded.Base.Servers.Webhook') execution.

```csharp
public class GuildedWebhookClient : Guilded.Base.BaseGuildedService
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Guilded.Base.BaseGuildedService](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.BaseGuildedService 'Guilded.Base.BaseGuildedService') &#129106; GuildedWebhookClient

### Remarks
  
This does not require to be connected. You can use it on a go.

### Example
  
Here's an example of a [webhook client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') in action:  
  
```csharp  
await using var webhookClient = new GuildedWebhookClient("...url here...", "... another webhook's url here...", ...);  
  
await webhookClient.CreateMessageAsync("Everyone, we have an announcement to make: Stop bullying!");  
```

| Constructors | |
| :--- | :--- |
| [GuildedWebhookClient(Guid, string)](GuildedWebhookClient.GuildedWebhookClient(Guid,string) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guid, string)') | Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks. |
| [GuildedWebhookClient(IWebhook[])](GuildedWebhookClient.GuildedWebhookClient(IWebhook[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[])') | Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given [webhooks](GuildedWebhookClient.GuildedWebhookClient(IWebhook[])#Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks'). |
| [GuildedWebhookClient(string[])](GuildedWebhookClient.GuildedWebhookClient(string[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(string[])') | Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks. |
| [GuildedWebhookClient(IList&lt;IWebhook&gt;)](GuildedWebhookClient.GuildedWebhookClient(IList_IWebhook_) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList<Guilded.Base.Servers.IWebhook>)') | Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given [webhooks](GuildedWebhookClient.GuildedWebhookClient(IList_IWebhook_)#Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList_Guilded.Base.Servers.IWebhook_).webhooks 'Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList<Guilded.Base.Servers.IWebhook>).webhooks'). |
| [GuildedWebhookClient(Uri[])](GuildedWebhookClient.GuildedWebhookClient(Uri[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Uri[])') | Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks. |

| Properties | |
| :--- | :--- |
| [Webhooks](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') | Gets the list of all [webhooks](Webhook 'Guilded.Base.Servers.Webhook') this [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') will execute. |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(MessageContent)](GuildedWebhookClient.CreateMessageAsync(MessageContent) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Content.MessageContent)') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |
| [CreateMessageAsync(Embed[])](GuildedWebhookClient.CreateMessageAsync(Embed[]) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Embeds.Embed[])') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |
| [CreateMessageAsync(string, Embed[])](GuildedWebhookClient.CreateMessageAsync(string,Embed[]) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |
| [CreateMessageAsync(string, IList&lt;Embed&gt;)](GuildedWebhookClient.CreateMessageAsync(string,IList_Embed_) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |
| [CreateMessageAsync(string)](GuildedWebhookClient.CreateMessageAsync(string) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string)') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |
| [CreateMessageAsync(IList&lt;Embed&gt;)](GuildedWebhookClient.CreateMessageAsync(IList_Embed_) 'Guilded.GuildedWebhookClient.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)') | Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient'). |

### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient')
- [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')
- [Guilded.Base.BaseGuildedService](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.BaseGuildedService 'Guilded.Base.BaseGuildedService')