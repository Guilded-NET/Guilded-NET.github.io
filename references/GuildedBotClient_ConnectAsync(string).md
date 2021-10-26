
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
## GuildedBotClient.ConnectAsync(string) Method

Connects to Guilded bot using parameter as an auth.
```csharp
public System.Threading.Tasks.Task ConnectAsync(string auth);
```

#### Parameters

<a name='Guilded_NET_GuildedBotClient_ConnectAsync(string)_auth'></a>
`auth` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token to be used for authorization


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When passed argument [auth](GuildedBotClient_ConnectAsync(string)#Guilded_NET_GuildedBotClient_ConnectAsync(string)_auth 'Guilded.NET.GuildedBotClient.ConnectAsync(string).auth') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

### Remarks
  
Creates a new connection to Guilded using argument [auth](GuildedBotClient_ConnectAsync(string)#Guilded_NET_GuildedBotClient_ConnectAsync(string)_auth 'Guilded.NET.GuildedBotClient.ConnectAsync(string).auth'). This does not use [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken').  
  
To disconnect from Guilded, use [DisconnectAsync()](AbstractGuildedClient_DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()')

### See Also
- [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [DisconnectAsync()](AbstractGuildedClient_DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()')