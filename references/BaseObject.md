---
title: BaseObject
layout: references
section: references
tags:
  - references
  - class
description: "

The base for all Guilded models.

```csharp
public abstract class BaseObject
```"
---

## BaseObject Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

The base for all Guilded models.

```csharp
public abstract class BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseObject

Derived  
&#8627; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')  
&#8627; [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent')  
&#8627; [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
&#8627; [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')  
&#8627; [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')  
&#8627; [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')  
&#8627; [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')  
&#8627; [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')  
&#8627; [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')  
&#8627; [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')  
&#8627; [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')  
&#8627; [SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink')

### Remarks
  
Provides a base for all Guilded.NET objects. This object can be serialized with [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') or [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') methods.

| Methods | |
| :--- | :--- |
| [Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance. |
| [Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)') | Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance. |

### See Also
- [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')