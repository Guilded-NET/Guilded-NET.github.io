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

## CommandEvent.IsPrivate Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.

```csharp
public bool IsPrivate { get; }
```

### Remarks
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') has a value or there is an user or role mention in the [Content](Message.Content 'Guilded.Base.Content.Message.Content').

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[Message](Message 'Guilded.Base.Content.Message') is private

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsSilent](Message.IsSilent 'Guilded.Base.Content.Message.IsSilent')
- [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')
- [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')
- [Content](Message.Content 'Guilded.Base.Content.Message.Content')
- [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')