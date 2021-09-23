
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.BaseGuildedClient(Uri) Constructor
Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types.  
```csharp
protected BaseGuildedClient(System.Uri apiUrl);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_BaseGuildedClient(System_Uri)_apiUrl'></a>
`apiUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
URL of Guilded API
  

#### Exceptions
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When [apiUrl](BaseGuildedClient_BaseGuildedClient(Uri)#Guilded_NET_Base_BaseGuildedClient_BaseGuildedClient(System_Uri)_apiUrl 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri).apiUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')
### Remarks
Inititates REST client and serializer settings.
