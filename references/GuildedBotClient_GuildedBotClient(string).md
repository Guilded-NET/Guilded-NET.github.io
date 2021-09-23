
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
## GuildedBotClient.GuildedBotClient(string) Constructor
Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [auth](GuildedBotClient_GuildedBotClient(string)#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth').  
```csharp
public GuildedBotClient(string auth);
```

#### Parameters
<a name='Guilded_NET_GuildedBotClient_GuildedBotClient(string)_auth'></a>
`auth` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Authentication token used to log into the bot in Guilded
  

#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
When passed argument [auth](GuildedBotClient_GuildedBotClient(string)#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace
### Remarks
This creates a new client and only initiates it. It does not connect to Guilded.



If you want to connect, set [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()').



You can also use [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') set.
