---
title: GuildedRequestException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with an [inner](GuildedRequestException.GuildedRequestException(string,Exception).md#Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).inner 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception).inner') explaining more."
---

## GuildedRequestException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedRequestException`](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with an [inner](GuildedRequestException.GuildedRequestException(string,Exception).md#Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).inner 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception).inner') explaining more.

```csharp
public GuildedRequestException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

Inner exception explaining more