---
title: GuildedEvents
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the dictionary of Guilded events, their names and other event information."
---

## AbstractGuildedClient.GuildedEvents Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the dictionary of Guilded events, their names and other event information.

```csharp
protected Dictionary<object,Guilded.IEventInfo<object>> GuildedEvents { get; set; }
```

### Remarks
  
You can add more events to this dictionary if Guilded.NET does not support certain events.

#### Property Value
[System.Collections.Generic.Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary')  
Dictionary of events

### See Also
- [Welcome](AbstractGuildedClient.Welcome.md 'Guilded.AbstractGuildedClient.Welcome')
- [Resume](AbstractGuildedClient.Resume.md 'Guilded.AbstractGuildedClient.Resume')
- [MessageCreated](AbstractGuildedClient.MessageCreated.md 'Guilded.AbstractGuildedClient.MessageCreated')
- [WebhookCreated](AbstractGuildedClient.WebhookCreated.md 'Guilded.AbstractGuildedClient.WebhookCreated')
- [MemberJoined](AbstractGuildedClient.MemberJoined.md 'Guilded.AbstractGuildedClient.MemberJoined')
- [ChannelCreated](AbstractGuildedClient.ChannelCreated.md 'Guilded.AbstractGuildedClient.ChannelCreated')
- [ListItemCreated](AbstractGuildedClient.ListItemCreated.md 'Guilded.AbstractGuildedClient.ListItemCreated')
- [DocCreated](AbstractGuildedClient.DocCreated.md 'Guilded.AbstractGuildedClient.DocCreated')