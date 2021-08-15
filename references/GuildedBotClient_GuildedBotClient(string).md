
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
## GuildedBotClient.GuildedBotClient(string) Constructor
Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [authToken](GuildedBotClient_GuildedBotClient(string)#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_authToken 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).authToken').  
```csharp
public GuildedBotClient(string authToken);
```

#### Parameters
<a name='Guilded_NET_GuildedBotClient_GuildedBotClient(string)_authToken'></a>
`authToken` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Authentication token used to log into the bot in Guilded
  

#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
When passed argument [authToken](GuildedBotClient_GuildedBotClient(string)#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_authToken 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).authToken') is null, empty or whitespace
### Remarks
This creates a new client and only initiates it. It does not connect to Guilded.



If you want to connect to Guilded, use [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()').
