
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.ExecuteRequestAsync&lt;T&gt;(IRestRequest) Method

Executes a request and receives ra esponse or an error.
```csharp
protected System.Threading.Tasks.Task<RestSharp.IRestResponse<T>> ExecuteRequestAsync<T>(RestSharp.IRestRequest request);
```

#### Type parameters

<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync_T_(RestSharp_IRestRequest)_T'></a>
`T`

Type of the response to get

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync_T_(RestSharp_IRestRequest)_request'></a>
`request` [RestSharp.IRestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestRequest 'RestSharp.IRestRequest')

The request to send to execute


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.IRestResponse&lt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse-1 'RestSharp.IRestResponse`1')[T](BaseGuildedClient_ExecuteRequestAsync_T_(IRestRequest)#Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync_T_(RestSharp_IRestRequest)_T 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync&lt;T&gt;(RestSharp.IRestRequest).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse-1 'RestSharp.IRestResponse`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Guilded request response


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
When [request](BaseGuildedClient_ExecuteRequestAsync_T_(IRestRequest)#Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync_T_(RestSharp_IRestRequest)_request 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync&lt;T&gt;(RestSharp.IRestRequest).request')'s URL refers to an invalid endpoint