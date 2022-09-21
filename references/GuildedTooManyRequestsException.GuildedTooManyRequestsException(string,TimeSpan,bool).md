---
title: GuildedTooManyRequestsException(string, TimeSpan, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with information from given parameters."
---

## GuildedTooManyRequestsException(string, TimeSpan, bool) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedTooManyRequestsException`](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')

Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with information from given parameters.

```csharp
public GuildedTooManyRequestsException(string message, TimeSpan retryAfter, bool isFromSlowmode);
```
#### Parameters

<a name='Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,TimeSpan,bool).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,TimeSpan,bool).retryAfter'></a>

`retryAfter` [System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')

The time to wait after another request

<a name='Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,TimeSpan,bool).isFromSlowmode'></a>

`isFromSlowmode` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [too many request error](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') was caused by [channel's slowmode settingss](ServerChannel 'Guilded.Base.Servers.ServerChannel')

### See Also
- [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')
- [GuildedTooManyRequestsException()](GuildedTooManyRequestsException.GuildedTooManyRequestsException() 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException()')
- [GuildedTooManyRequestsException(string)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string)')
- [GuildedTooManyRequestsException(string, Exception)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,Exception) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string, System.Exception)')