
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
## GuildedBotClient.ConnectAsync(string) Method
Connects to Guilded bot using [authToken](GuildedBotClient_ConnectAsync(string)#Guilded_NET_GuildedBotClient_ConnectAsync(string)_authToken 'Guilded.NET.GuildedBotClient.ConnectAsync(string).authToken').  
```csharp
public System.Threading.Tasks.Task ConnectAsync(string authToken);
```

#### Parameters
<a name='Guilded_NET_GuildedBotClient_ConnectAsync(string)_authToken'></a>
`authToken` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Token to be used for authorization
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
When passed argument [authToken](GuildedBotClient_ConnectAsync(string)#Guilded_NET_GuildedBotClient_ConnectAsync(string)_authToken 'Guilded.NET.GuildedBotClient.ConnectAsync(string).authToken') is null, empty or whitespace
### Remarks
Creates a new connection to Guilded using argument [authToken](GuildedBotClient_ConnectAsync(string)#Guilded_NET_GuildedBotClient_ConnectAsync(string)_authToken 'Guilded.NET.GuildedBotClient.ConnectAsync(string).authToken'). This does not use [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken')/  
