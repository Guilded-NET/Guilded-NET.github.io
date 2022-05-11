---
title: BaseObject
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for all Guilded models."
---

## BaseObject Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents the base for all Guilded models.

```csharp
public abstract class BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseObject

Derived  
&#8627; [ClientObject](ClientObject 'Guilded.Base.ClientObject')  
&#8627; [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')  
&#8627; [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')  
&#8627; [Embed](Embed 'Guilded.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia')  
&#8627; [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')  
&#8627; [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')  
&#8627; [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')  
&#8627; [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent')  
&#8627; [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')  
&#8627; [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')  
&#8627; [MemberUpdate](MemberUpdatedEvent.MemberUpdate 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')  
&#8627; [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>')  
&#8627; [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')  
&#8627; [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')  
&#8627; [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')  
&#8627; [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')  
&#8627; [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')  
&#8627; [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')  
&#8627; [Me](Me 'Guilded.Base.Users.Me')  
&#8627; [SocialLink](SocialLink 'Guilded.Base.Users.SocialLink')

### Remarks
  
This object can be serialized with [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer) 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') or [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]) 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') methods.

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]) 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') | Returns the serialized [BaseObject](BaseObject 'Guilded.Base.BaseObject') instance. |
| [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer) 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') | Returns serialized [BaseObject](BaseObject 'Guilded.Base.BaseObject') instance. |

### See Also
- [ClientObject](ClientObject 'Guilded.Base.ClientObject')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')