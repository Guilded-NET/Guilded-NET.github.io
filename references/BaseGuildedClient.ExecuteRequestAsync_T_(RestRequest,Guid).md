---
title: ExecuteRequestAsync<T>(RestRequest, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Executes a request and receives response or an error."
---

## BaseGuildedClient.ExecuteRequestAsync<T>(RestRequest, Guid) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Executes a request and receives response or an error.

```csharp
protected System.Threading.Tasks.Task<RestSharp.RestResponse<T>> ExecuteRequestAsync<T>(RestSharp.RestRequest request, Guid channel);
```
#### Type parameters

<a name='Guilded.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest,Guid).T'></a>

`T`
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest,Guid).request'></a>

`request` [RestSharp.RestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestRequest 'RestSharp.RestRequest')

The request to send to execute

<a name='Guilded.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

[The channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [request](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest,Guid)#Guilded.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest,Guid).request 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest, Guid).request') is being executed

### Remarks
  
Does additional checks on channel slowmode cooldowns.

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.RestResponse&lt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[T](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest,Guid)#Guilded.Base.BaseGuildedClient.ExecuteRequestAsync_T_(RestSharp.RestRequest,Guid).T 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest, Guid).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse-1 'RestSharp.RestResponse`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Guilded API's request's response