
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
## GuildedBotClient.AuthToken Property
An authentication token used to log into a bot in Guilded.  
```csharp
protected string AuthToken { get; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
Authentication token
### Remarks
An authentication token that will be used to connect to Guilded  
using [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()') method.



This token can be set through [GuildedBotClient(string)](GuildedBotClient_GuildedBotClient(string) 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)') constructor.  
This is optional and [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)') can be used instead with  
authentication token as an argument.



[AuthToken](GuildedBotClient_AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') will be passed as a header `Authorization` with bearer prefix.

#### See Also
- [ConnectAsync()](GuildedBotClient_ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient_ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')
- [GuildedBotClient(string)](GuildedBotClient_GuildedBotClient(string) 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)')
