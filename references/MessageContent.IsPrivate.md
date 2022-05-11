---
title: IsPrivate
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private."
---

## MessageContent.IsPrivate Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageContent`](MessageContent.md 'Guilded.Base.Content.MessageContent')

Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private.

```csharp
public System.Nullable<bool> IsPrivate { get; set; }
```

### Remarks
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds.md 'Guilded.Base.Content.Message.ReplyMessageIds') has a value or there is an user or role mention in the [Content](Message.Content.md 'Guilded.Base.Content.Message.Content').

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Message is private