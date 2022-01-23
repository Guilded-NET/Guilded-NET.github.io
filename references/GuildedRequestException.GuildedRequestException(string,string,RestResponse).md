---
title: GuildedRequestException(string, string, RestResponse)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters.

```csharp
public GuildedRequestException(string code, string message, RestSharp.RestResponse response);
```"
---

## GuildedRequestException(string, string, RestResponse) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedRequestException`](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters.

```csharp
public GuildedRequestException(string code, string message, RestSharp.RestResponse response);
```
#### Parameters

<a name='Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string,string,RestSharp.RestResponse).code'></a>

`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string,string,RestSharp.RestResponse).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string,string,RestSharp.RestResponse).response'></a>

`response` [RestSharp.RestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse 'RestSharp.RestResponse')

The response that was received from Guilded API