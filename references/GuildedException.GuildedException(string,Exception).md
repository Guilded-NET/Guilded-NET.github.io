---
title: GuildedException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with an [inner](GuildedException.GuildedException(string,Exception)#Guilded.Base.GuildedException.GuildedException(string,System.Exception).inner 'Guilded.Base.GuildedException.GuildedException(string, System.Exception).inner') explaining more."
---

## GuildedException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedException`](GuildedException 'Guilded.Base.GuildedException')

Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with an [inner](GuildedException.GuildedException(string,Exception)#Guilded.Base.GuildedException.GuildedException(string,System.Exception).inner 'Guilded.Base.GuildedException.GuildedException(string, System.Exception).inner') explaining more.

```csharp
public GuildedException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedException.GuildedException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedException.GuildedException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

Inner exception explaining more

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedException()](GuildedException.GuildedException() 'Guilded.Base.GuildedException.GuildedException()')
- [GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.Base.GuildedException.GuildedException(string)')
- [GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse) 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)')