
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.ExecuteRequestAsync(IRestRequest) Method

Executes a request and receives a response or an error.
```csharp
protected System.Threading.Tasks.Task<RestSharp.IRestResponse<object>> ExecuteRequestAsync(RestSharp.IRestRequest request);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync(RestSharp_IRestRequest)_request'></a>
`request` [RestSharp.IRestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestRequest 'RestSharp.IRestRequest')

The request to send to execute


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.IRestResponse&lt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse-1 'RestSharp.IRestResponse`1')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse-1 'RestSharp.IRestResponse`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Guilded request response


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
When [request](BaseGuildedClient_ExecuteRequestAsync(IRestRequest)#Guilded_NET_Base_BaseGuildedClient_ExecuteRequestAsync(RestSharp_IRestRequest)_request 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.IRestRequest).request')'s URL refers to an invalid endpoint