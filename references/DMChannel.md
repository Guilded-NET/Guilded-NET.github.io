
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Users](index#Guilded_NET_Base_Users 'Guilded.NET.Base.Users')
## DMChannel Class
Represents DMs and DM groups.  
```csharp
public class DMChannel : Guilded.NET.Base.BaseChannel<System.Guid>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [BaseChannel](BaseChannel 'Guilded.NET.Base.BaseChannel') &#129106; [Guilded.NET.Base.BaseChannel&lt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;') &#129106; DMChannel  

| Properties | |
| :--- | :--- |
| [CreatedBy](DMChannel_CreatedBy 'Guilded.NET.Base.Users.DMChannel.CreatedBy') | Who created this channel.<br/> |
| [DeletedAt](DMChannel_DeletedAt 'Guilded.NET.Base.Users.DMChannel.DeletedAt') | When this channel got deleted.<br/> |
| [DmType](DMChannel_DmType 'Guilded.NET.Base.Users.DMChannel.DmType') | If this DM channel is a group or default.<br/> |
| [LastMessage](DMChannel_LastMessage 'Guilded.NET.Base.Users.DMChannel.LastMessage') | Last message posted in this channel.<br/> |
| [OwnerId](DMChannel_OwnerId 'Guilded.NET.Base.Users.DMChannel.OwnerId') | Who created this channel.<br/> |
| [Type](DMChannel_Type 'Guilded.NET.Base.Users.DMChannel.Type') | Type of this channel.<br/> |
| [Users](DMChannel_Users 'Guilded.NET.Base.Users.DMChannel.Users') | All users in this DM channel.<br/> |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(string)](DMChannel_CreateMessageAsync(string) 'Guilded.NET.Base.Users.DMChannel.CreateMessageAsync(string)') | Sends a message to the specific channel.<br/> |
| [DeleteMessageAsync(Guid)](DMChannel_DeleteMessageAsync(Guid) 'Guilded.NET.Base.Users.DMChannel.DeleteMessageAsync(System.Guid)') | Deletes a specified message.<br/> |
| [Equals(object)](DMChannel_Equals(object) 'Guilded.NET.Base.Users.DMChannel.Equals(object)') | Whether objects are equal.<br/> |
| [GetHashCode()](DMChannel_GetHashCode() 'Guilded.NET.Base.Users.DMChannel.GetHashCode()') | Gets channel hashcode.<br/> |
| [ToString()](DMChannel_ToString() 'Guilded.NET.Base.Users.DMChannel.ToString()') | Turns channel to string.<br/> |
| [UpdateMessageAsync(Guid, string)](DMChannel_UpdateMessageAsync(Guid_string) 'Guilded.NET.Base.Users.DMChannel.UpdateMessageAsync(System.Guid, string)') | Updates the contents of the message.<br/> |

| Operators | |
| :--- | :--- |
| [operator ==(DMChannel, DMChannel)](DMChannel_operator(DMChannel_DMChannel) 'Guilded.NET.Base.Users.DMChannel.op_Equality(Guilded.NET.Base.Users.DMChannel, Guilded.NET.Base.Users.DMChannel)') | Whether channels are equal.<br/> |
| [operator !=(DMChannel, DMChannel)](DMChannel_operator!(DMChannel_DMChannel) 'Guilded.NET.Base.Users.DMChannel.op_Inequality(Guilded.NET.Base.Users.DMChannel, Guilded.NET.Base.Users.DMChannel)') | Whether channels are not equal.<br/> |
