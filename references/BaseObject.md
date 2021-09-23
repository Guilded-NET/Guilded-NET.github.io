
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## BaseObject Class
The base for all Guilded models.  
```csharp
public abstract class BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; BaseObject  

Derived  
&#8627; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')  
&#8627; [ElementData](ElementData 'Guilded.NET.Base.Chat.ElementData')  
&#8627; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')  
&#8627; [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')  
&#8627; [EmbedProvider](EmbedProvider 'Guilded.NET.Base.Embeds.EmbedProvider')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')  
&#8627; [MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')  
&#8627; [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')  
&#8627; [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')  
&#8627; [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')  
&#8627; [ChannelPermission](ChannelPermission 'Guilded.NET.Base.Permissions.ChannelPermission')  
&#8627; [PermissionList](PermissionList 'Guilded.NET.Base.Permissions.PermissionList')  
&#8627; [UserPermission](UserPermission 'Guilded.NET.Base.Permissions.UserPermission')  
&#8627; [SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink')  
### Remarks
Provides a base for all Guilded.NET objects.



This object can be serialized with [Serialize(JsonSerializer)](BaseObject_Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(JsonSerializer)')  
or [Serialize(JsonConverter[])](BaseObject_Serialize(JsonConverter__) 'Guilded.NET.Base.BaseObject.Serialize(JsonConverter[])') methods.

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseObject_Serialize(JsonConverter__) 'Guilded.NET.Base.BaseObject.Serialize(JsonConverter[])') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.<br/> |
| [Serialize(JsonSerializer)](BaseObject_Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(JsonSerializer)') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.<br/> |

#### See Also
- [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')
