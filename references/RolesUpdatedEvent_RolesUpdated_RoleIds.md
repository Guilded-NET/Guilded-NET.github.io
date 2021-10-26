
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent').[RolesUpdated](RolesUpdatedEvent_RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')
## RolesUpdatedEvent.RolesUpdated.RoleIds Property

The list of roles [UserId](RolesUpdatedEvent_RolesUpdated_UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds.
```csharp
public System.Collections.Generic.IList<uint> RoleIds { get; set; }
```


#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of role IDs

### Remarks
  
The list of roles that [UserId](RolesUpdatedEvent_RolesUpdated_UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding.  
  
Received or removed roles are not provided, so caching of previou role list is necessary if previous role list is needed.