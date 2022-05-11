---
title: GuildedAuthorizationException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') with [inner](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception).md#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,System.Exception).inner 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception).inner') explaining more."
---

## GuildedAuthorizationException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedAuthorizationException`](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') with [inner](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception).md#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,System.Exception).inner 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception).inner') explaining more.

```csharp
public GuildedAuthorizationException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

Inner exception explaining more