#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.BuildRequest(IRestRequest, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;) Method
Builds upon given REST request.  
```csharp
private IRestRequest BuildRequest(IRestRequest request, object body=null, bool encodeQuery=true, System.Collections.Generic.IDictionary<string,string> query=null, System.Collections.Generic.IDictionary<string,string> headers=null);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_BuildRequest(IRestRequest_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_request'></a>
`request` [RestSharp.IRestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestRequest 'RestSharp.IRestRequest')  
The request to build
  
<a name='Guilded_NET_Base_BaseGuildedClient_BuildRequest(IRestRequest_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_body'></a>
`body` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The object to be used as request's body
  
<a name='Guilded_NET_Base_BaseGuildedClient_BuildRequest(IRestRequest_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_encodeQuery'></a>
`encodeQuery` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Whether to encode all given queries
  
<a name='Guilded_NET_Base_BaseGuildedClient_BuildRequest(IRestRequest_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_query'></a>
`query` [System.Collections.Generic.IDictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')  
The dictionary of queries and their values
  
<a name='Guilded_NET_Base_BaseGuildedClient_BuildRequest(IRestRequest_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_headers'></a>
`headers` [System.Collections.Generic.IDictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')  
The dictionary of headers and their values
  
#### Returns
[RestSharp.IRestRequest](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestRequest 'RestSharp.IRestRequest')  
Given request
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
