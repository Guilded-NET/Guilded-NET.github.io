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
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

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
- [Welcome](AbstractGuildedClient.Welcome 'Guilded.AbstractGuildedClient.Welcome')
- [Resume](AbstractGuildedClient.Resume 'Guilded.AbstractGuildedClient.Resume')
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')
- [ChannelCreated](AbstractGuildedClient.ChannelCreated 'Guilded.AbstractGuildedClient.ChannelCreated')
- [ListItemCreated](AbstractGuildedClient.ListItemCreated 'Guilded.AbstractGuildedClient.ListItemCreated')
- [DocCreated](AbstractGuildedClient.DocCreated 'Guilded.AbstractGuildedClient.DocCreated')