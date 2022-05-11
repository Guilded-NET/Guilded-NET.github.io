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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

Represents the base for all Guilded models.

```csharp
public abstract class BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseObject

Derived  
&#8627; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject')  
&#8627; [ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary')  
&#8627; [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')  
&#8627; [Embed](Embed.md 'Guilded.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor.md 'Guilded.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField.md 'Guilded.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter.md 'Guilded.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia.md 'Guilded.Base.Embeds.EmbedMedia')  
&#8627; [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')  
&#8627; [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')  
&#8627; [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')  
&#8627; [MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')  
&#8627; [MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>')  
&#8627; [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')  
&#8627; [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')  
&#8627; [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')  
&#8627; [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')  
&#8627; [MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')  
&#8627; [MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')  
&#8627; [Me](Me.md 'Guilded.Base.Users.Me')  
&#8627; [SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink')

### Remarks
  
This object can be serialized with [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') or [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') methods.

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') | Returns the serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance. |
| [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') | Returns serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance. |

### See Also
- [ClientObject](ClientObject.md 'Guilded.Base.ClientObject')