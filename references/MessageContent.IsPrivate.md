---
title: IsPrivate
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private."
---

## MessageContent.IsPrivate Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageContent`](MessageContent 'Guilded.Base.Content.MessageContent')

Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.

```csharp
public System.Nullable<bool> IsPrivate { get; set; }
```

### Remarks
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') has a value or there is an user or role mention in the [Content](Message.Content 'Guilded.Base.Content.Message.Content').

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Message](Message 'Guilded.Base.Content.Message') is private

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsSilent](Message.IsSilent 'Guilded.Base.Content.Message.IsSilent')
- [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')
- [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')
- [Content](Message.Content 'Guilded.Base.Content.Message.Content')
- [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')