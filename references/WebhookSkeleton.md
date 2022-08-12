---
title: WebhookSkeleton
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the barebones of a [webhook](Webhook 'Guilded.Base.Servers.Webhook') that can be executed."
---

## WebhookSkeleton Class
##### **Assembly:** `Guilded`<br/>**Namespace:** [`Guilded`](Guilded 'Guilded')

Represents the barebones of a [webhook](Webhook 'Guilded.Base.Servers.Webhook') that can be executed.

```csharp
public class WebhookSkeleton :
Guilded.Base.Servers.IWebhook
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; WebhookSkeleton

Implements [Guilded.Base.Servers.IWebhook](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.IWebhook 'Guilded.Base.Servers.IWebhook')

| Constructors | |
| :--- | :--- |
| [WebhookSkeleton(Guid, string)](WebhookSkeleton.WebhookSkeleton(Guid,string) 'Guilded.WebhookSkeleton.WebhookSkeleton(Guid, string)') | Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given [token](WebhookSkeleton.WebhookSkeleton(Guid,string)#Guilded.WebhookSkeleton.WebhookSkeleton(Guid,string).token 'Guilded.WebhookSkeleton.WebhookSkeleton(Guid, string).token') and [webhook](WebhookSkeleton.WebhookSkeleton(Guid,string)#Guilded.WebhookSkeleton.WebhookSkeleton(Guid,string).webhook 'Guilded.WebhookSkeleton.WebhookSkeleton(Guid, string).webhook'). |
| [WebhookSkeleton(string, string)](WebhookSkeleton.WebhookSkeleton(string,string) 'Guilded.WebhookSkeleton.WebhookSkeleton(string, string)') | Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given [token](WebhookSkeleton.WebhookSkeleton(string,string)#Guilded.WebhookSkeleton.WebhookSkeleton(string,string).token 'Guilded.WebhookSkeleton.WebhookSkeleton(string, string).token') and [webhook](WebhookSkeleton.WebhookSkeleton(string,string)#Guilded.WebhookSkeleton.WebhookSkeleton(string,string).webhook 'Guilded.WebhookSkeleton.WebhookSkeleton(string, string).webhook'). |
| [WebhookSkeleton(string)](WebhookSkeleton.WebhookSkeleton(string) 'Guilded.WebhookSkeleton.WebhookSkeleton(string)') | Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given [url](WebhookSkeleton.WebhookSkeleton(string)#Guilded.WebhookSkeleton.WebhookSkeleton(string).url 'Guilded.WebhookSkeleton.WebhookSkeleton(string).url'). |
| [WebhookSkeleton(Uri)](WebhookSkeleton.WebhookSkeleton(Uri) 'Guilded.WebhookSkeleton.WebhookSkeleton(Uri)') | Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given [url](WebhookSkeleton.WebhookSkeleton(Uri)#Guilded.WebhookSkeleton.WebhookSkeleton(Uri).url 'Guilded.WebhookSkeleton.WebhookSkeleton(Uri).url'). |

| Properties | |
| :--- | :--- |
| [Url](WebhookSkeleton.Url 'Guilded.WebhookSkeleton.Url') | Gets the URL for executing [webhooks](Webhook 'Guilded.Base.Servers.Webhook'). |

### See Also
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')