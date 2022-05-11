---
title: UpdateAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the specified webhook in the specified server."
---

## Webhook.UpdateAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Updates the specified webhook in the specified server.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> UpdateAsync(string name);
```

### Remarks
  
Webhooks can moved between channels using 'newChannel' parameter.
#### Parameters

<a name='Guilded.Base.Servers.Webhook.UpdateAsync(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of the webhook

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](Webhook.UpdateAsync(string).md#Guilded.Base.Servers.Webhook.UpdateAsync(string).name 'Guilded.Base.Servers.Webhook.UpdateAsync(string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated webhook