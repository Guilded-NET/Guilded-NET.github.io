#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.ExecuteRequest(string, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;) Method
Sends a request to Guilded.  
```csharp
public System.Threading.Tasks.Task<IRestResponse<object>> ExecuteRequest(string resource, Method method, object body=null, bool encodeQuery=true, System.Collections.Generic.IDictionary<string,string> query=null, System.Collections.Generic.IDictionary<string,string> headers=null);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_resource'></a>
`resource` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The path of the endpoint
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_method'></a>
`method` [RestSharp.Method](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.Method 'RestSharp.Method')  
The action method of the endpoint
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_body'></a>
`body` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The object to be used as request's body
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_encodeQuery'></a>
`encodeQuery` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Whether to encode all given queries
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_query'></a>
`query` [System.Collections.Generic.IDictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')  
The dictionary of queries and their values
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteRequest(string_Method_object_bool_System_Collections_Generic_IDictionary_string_string__System_Collections_Generic_IDictionary_string_string_)_headers'></a>
`headers` [System.Collections.Generic.IDictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IDictionary-2 'System.Collections.Generic.IDictionary`2')  
The dictionary of headers and their values
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[RestSharp.IRestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse 'RestSharp.IRestResponse')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Request response
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Remarks
Sends a request to Guilded API and returns response as [RestSharp.IRestResponse&lt;&gt;](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse-1 'RestSharp.IRestResponse`1') type. This automatically picks up on any errors received.  
