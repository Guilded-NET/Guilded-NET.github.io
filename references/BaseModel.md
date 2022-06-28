---
title: BaseModel
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for all Guilded models."
---

## BaseModel Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents the base for all Guilded models.

```csharp
public abstract class BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseModel

Derived  
&#8627; [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')  
&#8627; [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')  
&#8627; [Mentions](Mentions 'Guilded.Base.Content.Mentions')  
&#8627; [ChannelMention](Mentions.ChannelMention 'Guilded.Base.Content.Mentions.ChannelMention')  
&#8627; [RoleMention](Mentions.RoleMention 'Guilded.Base.Content.Mentions.RoleMention')  
&#8627; [UserMention](Mentions.UserMention 'Guilded.Base.Content.Mentions.UserMention')  
&#8627; [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')  
&#8627; [ContentModel](ContentModel 'Guilded.Base.ContentModel')  
&#8627; [Embed](Embed 'Guilded.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor 'Guilded.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField 'Guilded.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia')  
&#8627; [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')  
&#8627; [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')  
&#8627; [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')  
&#8627; [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')  
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
  
This object can be serialized with [Serialize(JsonSerializer)](BaseModel.Serialize(JsonSerializer) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer)') or [Serialize(JsonConverter[])](BaseModel.Serialize(JsonConverter[]) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonConverter[])') methods.

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseModel.Serialize(JsonConverter[]) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonConverter[])') | Returns the serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance. |
| [Serialize(JsonSerializer)](BaseModel.Serialize(JsonSerializer) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer)') | Returns serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance. |

### See Also
- [ContentModel](ContentModel 'Guilded.Base.ContentModel')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')