#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.GuildedEvents Property
A dictionary of Guilded events.  
```csharp
protected System.Collections.Generic.Dictionary<string,Guilded.NET.EventInfo> GuildedEvents { get; set; }
```
#### Property Value
[System.Collections.Generic.Dictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[EventInfo](EventInfo.md 'Guilded.NET.EventInfo')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')
Dictionary of events
### Remarks
A dictionary of all supported Guilded events, containing their event names and information about the event to use.



Use this if you need to support events that Guilded.NET does not.
