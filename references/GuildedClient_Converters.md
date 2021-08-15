
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.Converters Property
A list of JSON converters used to (de)serialize Guilded responses and WebSocket events.  
```csharp
public JsonConverter[] Converters { get; set; }
```

#### Property Value
[Newtonsoft.Json.JsonConverter](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonConverter 'Newtonsoft.Json.JsonConverter')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')
List of JSON converters
### Remarks
Use these converters to pass anything to Guilded REST client or Guilded WebSocket client.
