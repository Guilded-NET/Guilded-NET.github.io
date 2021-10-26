
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
## RolesUpdatedEvent.UpdatedUsers Property

The array of updated users.
```csharp
public Guilded.NET.Base.GId[] UpdatedUsers { get; }
```


#### Property Value
[GId](GId 'Guilded.NET.Base.GId')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

### Remarks
  
Returns the array of members that had their role list updated either by losing or receiving roles.  
  
This property goes through [MemberRoleIds](RolesUpdatedEvent_MemberRoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.MemberRoleIds') and selects user IDs.