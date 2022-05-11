---
title: GuildedPermissionException(string, string, RestResponse)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with information from given parameters."
---

## GuildedPermissionException(string, string, RestResponse) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedPermissionException`](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with information from given parameters.

```csharp
public GuildedPermissionException(string code, string message, RestSharp.RestResponse response);
```
#### Parameters

<a name='Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,string,RestSharp.RestResponse).code'></a>

`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,string,RestSharp.RestResponse).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,string,RestSharp.RestResponse).response'></a>

`response` [RestSharp.RestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse 'RestSharp.RestResponse')

The response that was received from Guilded API