---
title: UpdateAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the webhook."
---

## WebhookEvent.UpdateAsync(string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Edits the webhook.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> UpdateAsync(string name);
```

### Remarks
  
[Webhook](Webhook 'Guilded.Base.Servers.Webhook') can moved between [channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') using 'newChannel' parameter.
#### Parameters

<a name='Guilded.Base.Events.WebhookEvent.UpdateAsync(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](WebhookEvent.UpdateAsync(string)#Guilded.Base.Events.WebhookEvent.UpdateAsync(string).name 'Guilded.Base.Events.WebhookEvent.UpdateAsync(string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [webhook](Webhook 'Guilded.Base.Servers.Webhook')