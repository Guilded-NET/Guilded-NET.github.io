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

## Webhook.UpdateAsync(string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Edits the webhook.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> UpdateAsync(string name);
```

### Remarks
  
[Webhook](Webhook 'Guilded.Base.Servers.Webhook') can moved between [channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') using 'newChannel' parameter.
#### Parameters

<a name='Guilded.Base.Servers.Webhook.UpdateAsync(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](Webhook.UpdateAsync(string)#Guilded.Base.Servers.Webhook.UpdateAsync(string).name 'Guilded.Base.Servers.Webhook.UpdateAsync(string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [webhook](Webhook 'Guilded.Base.Servers.Webhook')