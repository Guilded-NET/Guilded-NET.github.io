---
title: GuildedException(string, string, RestResponse)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters.

```csharp
public GuildedException(string code, string message, RestSharp.RestResponse response);
```"
---

## GuildedException(string, string, RestResponse) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedException`](GuildedException 'Guilded.NET.Base.GuildedException')

Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters.

```csharp
public GuildedException(string code, string message, RestSharp.RestResponse response);
```
#### Parameters

<a name='Guilded.NET.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).code'></a>

`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded.NET.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.NET.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).response'></a>

`response` [RestSharp.RestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse 'RestSharp.RestResponse')

The response that was received from Guilded API