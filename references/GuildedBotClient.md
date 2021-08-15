#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET')
## GuildedBotClient Class
A client type for Guilded bots.  
```csharp
public class GuildedBotClient : Guilded.NET.GuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Guilded.NET.Base.BaseGuildedClient](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#129106; [GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient') &#129106; GuildedBotClient  
### Remarks
Use this to initiate and log into Guilded bot.



If you want to connect, set [AuthToken](GuildedBotClient_AuthToken.md 'Guilded.NET.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient_ConnectAsync().md 'Guilded.NET.GuildedBotClient.ConnectAsync()'). You can also use [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string).md 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')

| Constructors | |
| :--- | :--- |
| [GuildedBotClient()](GuildedBotClient_GuildedBotClient().md 'Guilded.NET.GuildedBotClient.GuildedBotClient()') | Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.NET.GuildedBotClient') instance without authentication token.<br/> |
| [GuildedBotClient(string)](GuildedBotClient_GuildedBotClient(string).md 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)') | Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.NET.GuildedBotClient') instance with given [authToken](GuildedBotClient_GuildedBotClient(string).md#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_authToken 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).authToken').<br/> |

| Properties | |
| :--- | :--- |
| [AuthToken](GuildedBotClient_AuthToken.md 'Guilded.NET.GuildedBotClient.AuthToken') | An authentication token used to log into a bot in Guilded.<br/> |

| Methods | |
| :--- | :--- |
| [ConnectAsync()](GuildedBotClient_ConnectAsync().md 'Guilded.NET.GuildedBotClient.ConnectAsync()') | Connects to Guilded using [AuthToken](GuildedBotClient_AuthToken.md 'Guilded.NET.GuildedBotClient.AuthToken').<br/> |
| [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string).md 'Guilded.NET.GuildedBotClient.ConnectAsync(string)') | Connects to Guilded bot using [authToken](GuildedBotClient_ConnectAsync(string).md#Guilded_NET_GuildedBotClient_ConnectAsync(string)_authToken 'Guilded.NET.GuildedBotClient.ConnectAsync(string).authToken').<br/> |
#### See Also
- [GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
- [Guilded.NET.Base.BaseGuildedClient](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [ConnectAsync()](GuildedBotClient_ConnectAsync().md 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string).md 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')
