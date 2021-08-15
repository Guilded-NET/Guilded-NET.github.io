
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Teams](index#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams')
## TeamChannel Class
Interface for team channels and categories.  
```csharp
public abstract class TeamChannel : Guilded.NET.Base.Teams.TeamChannel<System.Guid>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [BaseChannel](BaseChannel 'Guilded.NET.Base.BaseChannel') &#129106; [Guilded.NET.Base.BaseChannel&lt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;') &#129106; [Guilded.NET.Base.Teams.TeamChannel&lt;](TeamChannel_T_ 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](TeamChannel_T_ 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;') &#129106; TeamChannel  

Derived  
&#8627; [Channel](Channel 'Guilded.NET.Base.Teams.Channel')  
&#8627; [ThreadChannel](ThreadChannel 'Guilded.NET.Base.Teams.ThreadChannel')  

| Properties | |
| :--- | :--- |
| [ArchivedAt](TeamChannel_ArchivedAt 'Guilded.NET.Base.Teams.TeamChannel.ArchivedAt') | When this channel got archived.<br/> |
| [ArchivedBy](TeamChannel_ArchivedBy 'Guilded.NET.Base.Teams.TeamChannel.ArchivedBy') | Who archived this channel.<br/> |
| [ArchivedByWebhook](TeamChannel_ArchivedByWebhook 'Guilded.NET.Base.Teams.TeamChannel.ArchivedByWebhook') | Which webhook archived this channel.<br/> |
| [AutoArchiveAt](TeamChannel_AutoArchiveAt 'Guilded.NET.Base.Teams.TeamChannel.AutoArchiveAt') | When this channel should get archived.<br/> |
| [ContentType](TeamChannel_ContentType 'Guilded.NET.Base.Teams.TeamChannel.ContentType') | Type of this channel.<br/> |
| [CreatedBy](TeamChannel_CreatedBy 'Guilded.NET.Base.Teams.TeamChannel.CreatedBy') | Who created this channel.<br/> |
| [CreatedByWebhook](TeamChannel_CreatedByWebhook 'Guilded.NET.Base.Teams.TeamChannel.CreatedByWebhook') | Which webhook created this channel.<br/> |
| [DeletedAt](TeamChannel_DeletedAt 'Guilded.NET.Base.Teams.TeamChannel.DeletedAt') | When this channel got deleted.<br/> |
| [ParentChannel](TeamChannel_ParentChannel 'Guilded.NET.Base.Teams.TeamChannel.ParentChannel') | ID of the parent channel.<br/> |

| Methods | |
| :--- | :--- |
| [CreateMessageAsync(string)](TeamChannel_CreateMessageAsync(string) 'Guilded.NET.Base.Teams.TeamChannel.CreateMessageAsync(string)') | Sends a message to the specific channel.<br/> |
| [DeleteMessageAsync(Guid)](TeamChannel_DeleteMessageAsync(Guid) 'Guilded.NET.Base.Teams.TeamChannel.DeleteMessageAsync(System.Guid)') | Deletes a specified message.<br/> |
| [GetMessageAsync(Guid)](TeamChannel_GetMessageAsync(Guid) 'Guilded.NET.Base.Teams.TeamChannel.GetMessageAsync(System.Guid)') | Gets a message in this channel.<br/> |
| [UpdateMessageAsync(Guid, string)](TeamChannel_UpdateMessageAsync(Guid_string) 'Guilded.NET.Base.Teams.TeamChannel.UpdateMessageAsync(System.Guid, string)') | Updates the contents of the message.<br/> |
