
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
## XpAddedEvent.Users Property

The identifiers of all users that received that amount of XP.
```csharp
public System.Collections.Generic.ISet<Guilded.NET.Base.GId> Users { get; set; }
```


#### Property Value
[System.Collections.Generic.ISet&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')[GId](GId 'Guilded.NET.Base.GId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')  
List of user IDs

### Remarks
  
This contains a set of users that were given [Amount](XpAddedEvent_Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') amount of XP.  
  
The set can contain more than one member.