
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
## XpAddedEvent.Amount Property

The amount of XP given to the users.
```csharp
public long Amount { get; set; }
```


#### Property Value
[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
XP

### Remarks
  
The amount of XP that was given to all users in [Users](XpAddedEvent_Users 'Guilded.NET.Base.Events.XpAddedEvent.Users') set.  
  
This should usually be between 1000 and -1000 amount of XP.