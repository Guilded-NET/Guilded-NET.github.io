
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## BaseObject Class

The base for all Guilded models.
```csharp
public abstract class BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; BaseObject

Derived  
&#8627; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')  
&#8627; [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')  
&#8627; [MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')  
&#8627; [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')  
&#8627; [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')  
&#8627; [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')  
&#8627; [SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink')

### Remarks
  
Provides a base for all Guilded.NET objects. This object can be serialized with [Serialize(JsonSerializer)](BaseObject_Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') or [Serialize(JsonConverter[])](BaseObject_Serialize(JsonConverter__) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') methods.

### See Also
- [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseObject_Serialize(JsonConverter__) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance. |
| [Serialize(JsonSerializer)](BaseObject_Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance. |
