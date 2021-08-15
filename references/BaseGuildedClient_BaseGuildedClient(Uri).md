#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.BaseGuildedClient(Uri) Constructor
A base for Guilded client.  
```csharp
protected BaseGuildedClient(System.Uri apiUrl);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_BaseGuildedClient(System_Uri)_apiUrl'></a>
`apiUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
URL of Guilded API
  
#### Exceptions
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When apiurl or socketurl are null
[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
When apiurl or socketurl are invalid
