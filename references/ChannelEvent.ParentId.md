---
title: ParentId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the parent channel of this channel."
---

## ChannelEvent.ParentId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ChannelEvent`](ChannelEvent 'Guilded.Base.Events.ChannelEvent')

Gets the identifier of the parent channel of this channel.

```csharp
public System.Nullable<Guid> ParentId { get; }
```

### Remarks
  
This property is only present in threads. This can be used to determine if this is a thread, and as such, [IsThread](ServerChannel.IsThread 'Guilded.Base.Servers.ServerChannel.IsThread') property exists.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Channel ID](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')?

### See Also
- [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')
- [Id](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')
- [CategoryId](ServerChannel.CategoryId 'Guilded.Base.Servers.ServerChannel.CategoryId')
- [GroupId](ServerChannel.GroupId 'Guilded.Base.Servers.ServerChannel.GroupId')
- [ServerId](ServerChannel.ServerId 'Guilded.Base.Servers.ServerChannel.ServerId')