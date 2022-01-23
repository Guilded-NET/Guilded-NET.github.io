---
title: ExecuteRequestAsync<T>(RestRequest)
layout: references
section: references
tags:
  - references
  - method
description: "

Executes a request and receives ra esponse or an error.

```csharp
protected System.Threading.Tasks.Task<RestSharp.RestResponse<T>> ExecuteRequestAsync<T>(RestSharp.RestRequest request);
```"
---

## BaseGuildedClient.ExecuteRequestAsync<T>(RestRequest) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Executes a request and receives ra esponse or an error.

```csharp
protected System.Threading.Tasks.Task<RestSharp.RestResponse<T>> ExecuteRequestAsync<T>(RestSharp.RestRequest request);
```
#### Type parameters

<a name='Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest).T'></a>

`T`

Type of the response to get
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest).request'></a>

`request` [RestSharp.RestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestRequest 'RestSharp.RestRequest')

The request to send to execute

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
When [request](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest)#Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest).request 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest).request')'s URL refers to an invalid endpoint

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.RestResponse&lt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[T](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest)#Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest).T 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Guilded request response