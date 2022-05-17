---
title: Type
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the parent channel of this channel."
---

## ChannelEvent.Type Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ChannelEvent`](ChannelEvent 'Guilded.Base.Events.ChannelEvent')

Gets the identifier of the parent channel of this channel.

```csharp
public Guilded.Base.Servers.ChannelType Type { get; }
```

### Remarks
  
This property is only present in threads. This can be used to determine if this is a thread, and as such, [IsThread](ServerChannel.IsThread 'Guilded.Base.Servers.ServerChannel.IsThread') property exists.

#### Property Value
[ChannelType](ChannelType 'Guilded.Base.Servers.ChannelType')  
[Channel ID](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')?

### See Also
- [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')
- [Id](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')
- [CategoryId](ServerChannel.CategoryId 'Guilded.Base.Servers.ServerChannel.CategoryId')
- [GroupId](ServerChannel.GroupId 'Guilded.Base.Servers.ServerChannel.GroupId')
- [ServerId](ServerChannel.ServerId 'Guilded.Base.Servers.ServerChannel.ServerId')