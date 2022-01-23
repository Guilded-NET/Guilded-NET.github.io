---
title: DeleteMessageAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the message.

```csharp
public System.Threading.Tasks.Task DeleteMessageAsync();
```"
---

## Message.DeleteMessageAsync() Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Message`](Message 'Guilded.NET.Base.Content.Message')

Deletes the message.

```csharp
public System.Threading.Tasks.Task DeleteMessageAsync();
```

### Remarks
  
Removes the specified message, whether it be from the client or another user.

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')