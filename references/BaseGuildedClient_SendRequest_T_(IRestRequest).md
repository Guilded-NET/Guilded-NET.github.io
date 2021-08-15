
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.SendRequest&lt;T&gt;(IRestRequest) Method
Executes a request and receives response or an error.  
```csharp
private System.Threading.Tasks.Task<IRestResponse<T>> SendRequest<T>(IRestRequest request);
```

#### Type parameters
<a name='Guilded_NET_Base_BaseGuildedClient_SendRequest_T_(IRestRequest)_T'></a>
`T`  
Type of the response to get
  

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_SendRequest_T_(IRestRequest)_request'></a>
`request` [RestSharp.IRestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestRequest 'RestSharp.IRestRequest')  
The request to send to execute
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.IRestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse 'RestSharp.IRestResponse')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Request response
