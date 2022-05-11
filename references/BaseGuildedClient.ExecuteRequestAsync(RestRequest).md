---
title: ExecuteRequestAsync(RestRequest)
layout: references
section: references
tags:
  - references
  - method
description: "

Executes a request and receives a response or an error."
---

## BaseGuildedClient.ExecuteRequestAsync(RestRequest) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Executes a request and receives a response or an error.

```csharp
protected System.Threading.Tasks.Task<RestSharp.RestResponse<object>> ExecuteRequestAsync(RestSharp.RestRequest request);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest).request'></a>

`request` [RestSharp.RestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestRequest 'RestSharp.RestRequest')

The request to send to execute

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')  
When [request](BaseGuildedClient.ExecuteRequestAsync(RestRequest)#Guilded.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest).request 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest).request')'s URL refers to an invalid endpoint

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.RestResponse&lt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Guilded request response