
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET')
## GuildedBotClient Class

A client type for Guilded bots.
```csharp
public class GuildedBotClient : Guilded.NET.AbstractGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseGuildedClient](https://guilded-net.github.io/references/BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#x27A1; [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') &#x27A1; GuildedBotClient

### Example
  
This showcases a Guilded bot client that connects to Guilded, listens for prepared event and only listens to messages:  
```csharp  
using GuildedBotClient client = new GuildedBotClient("...auth...");  
client.Prepared += _ => Console.WriteLine("I am prepared!");  
client.MessageCreated.Subscribe(msg => Console.WriteLine("Received message with content:\n{0}", msg.Content));  
await client.ConnectAsync();  
```  
  
An example of a Guilded bot client with `!ping` command  
```csharp  
using GuildedBotClient client = new GuildedBotClient("...auth...");  
  
client.Prepared += _ => Console.WriteLine("I am prepared!");  
client.MessageCreated  
    .Where(msg => msg.Content == "!ping")  
    .Subscribe(msg => await msg.RespondAsync("Pong!"));  
  
await client.ConnectAsync();  
```

### Remarks
  
Use this to initiate and log into Guilded bot.  
  
If you want to connect, set [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()').  
  
You can also use [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') set.

### See Also
- [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
- [BaseGuildedClient](https://guilded-net.github.io/references/BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [Prepared](AbstractGuildedClient_Prepared 'Guilded.NET.AbstractGuildedClient.Prepared')
- [Connected](https://guilded-net.github.io/references/BaseGuildedClient_Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')
- [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')
- [MessageCreated](AbstractGuildedClient_MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient_MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated')

| Constructors | |
| :--- | :--- |
| [GuildedBotClient()](GuildedBotClient_GuildedBotClient() 'Guilded.NET.GuildedBotClient.GuildedBotClient()') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance without authentication token. |
| [GuildedBotClient(string)](GuildedBotClient_GuildedBotClient(string) 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [auth](GuildedBotClient_GuildedBotClient(string)#Guilded_NET_GuildedBotClient_GuildedBotClient(string)_auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth'). |

| Properties | |
| :--- | :--- |
| [AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') | An authentication token used to log into a bot in Guilded. |

| Methods | |
| :--- | :--- |
| [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()') | Connects to Guilded using defined auth. |
| [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)') | Connects to Guilded bot using parameter as an auth. |
