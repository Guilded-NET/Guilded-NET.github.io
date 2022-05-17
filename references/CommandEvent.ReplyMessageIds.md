---
title: ReplyMessageIds
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to."
---

## CommandEvent.ReplyMessageIds Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.

```csharp
public System.Collections.Generic.IList<Guid>? ReplyMessageIds { get; }
```

### Remarks
  
The max reply limit is 5.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of [message IDs](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent`2.Id')?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')
- [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')