---
title: GuildedResourceException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with an [inner](GuildedResourceException.GuildedResourceException(string,Exception).md#Guilded.Base.GuildedResourceException.GuildedResourceException(string,System.Exception).inner 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception).inner') explaining more."
---

## GuildedResourceException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedResourceException`](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with an [inner](GuildedResourceException.GuildedResourceException(string,Exception).md#Guilded.Base.GuildedResourceException.GuildedResourceException(string,System.Exception).inner 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception).inner') explaining more.

```csharp
public GuildedResourceException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedResourceException.GuildedResourceException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedResourceException.GuildedResourceException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

Inner exception explaining more