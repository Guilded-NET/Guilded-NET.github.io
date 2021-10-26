
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.GuildedEvents Property

A dictionary of Guilded events.
```csharp
protected System.Collections.Generic.Dictionary<object,Guilded.NET.IEventInfo<object>> GuildedEvents { get; set; }
```


#### Property Value
[System.Collections.Generic.Dictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[Guilded.NET.IEventInfo&lt;](IEventInfo_T_ 'Guilded.NET.IEventInfo&lt;T&gt;')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo&lt;T&gt;')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')  
Dictionary of events

### Remarks
  
A dictionary of all supported Guilded events, containing their event names and information about the event to use.  
  
You can add more events to this dictionary if Guilded.NET does not support certain events.