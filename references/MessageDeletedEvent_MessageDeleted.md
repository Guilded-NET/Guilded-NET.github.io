
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
## MessageDeletedEvent.MessageDeleted Class
A message that was recently deleted/removed.  
```csharp
public class MessageDeletedEvent.MessageDeleted : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; MessageDeleted  
### Remarks
A no longer existing message that was deleted/removed  
by an author of this message or by a server staff.

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent_MessageDeleted_ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId') | The identifier of the channel where this message is.<br/> |
| [DeletedAt](MessageDeletedEvent_MessageDeleted_DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt') | The date of when the message was deleted.<br/> |
| [Id](MessageDeletedEvent_MessageDeleted_Id 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Id') | The identifier of the message.<br/> |

| Methods | |
| :--- | :--- |
| [Equals(object)](MessageDeletedEvent_MessageDeleted_Equals(object) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)') | Returns whether this and [obj](MessageDeletedEvent_MessageDeleted_Equals(object)#Guilded_NET_Base_Events_MessageDeletedEvent_MessageDeleted_Equals(object)_obj 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj') are equal to each other.<br/> |
| [GetHashCode()](MessageDeletedEvent_MessageDeleted_GetHashCode() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()') | Gets a hashcode of this object.<br/> |
| [ToString()](MessageDeletedEvent_MessageDeleted_ToString() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()') | Creates string equivalent of the message.<br/> |

#### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
