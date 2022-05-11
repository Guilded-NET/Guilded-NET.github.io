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

## Message.ReplyMessageIds Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.

```csharp
public System.Collections.Generic.IList<Guid>? ReplyMessageIds { get; }
```

### Remarks
  
The max reply limit is 5.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of [message IDs](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id')?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')
- [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')