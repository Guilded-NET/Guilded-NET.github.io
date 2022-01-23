---
title: ReplyMessageIds
layout: references
section: references
tags:
  - references
  - property
description: "

The list of messages being replied to.

```csharp
public System.Collections.Generic.IList<System.Guid>? ReplyMessageIds { get; set; }
```"
---

## MessageContent.ReplyMessageIds Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MessageContent`](MessageContent 'Guilded.NET.Base.Content.MessageContent')

The list of messages being replied to.

```csharp
public System.Collections.Generic.IList<System.Guid>? ReplyMessageIds { get; set; }
```

### Remarks
  
Specifies which messages were replied to in this message. The max reply limit is 5.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of message IDs?