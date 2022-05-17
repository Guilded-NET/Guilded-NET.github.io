---
title: IsSilent
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user."
---

## Message.IsSilent Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user.

```csharp
public bool IsSilent { get; }
```

### Remarks
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') has a value or there is an user or role mention in the [Content](Message.Content 'Guilded.Base.Content.Message.Content').

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[Message](Message 'Guilded.Base.Content.Message') is silent

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')
- [IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')
- [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')
- [Content](Message.Content 'Guilded.Base.Content.Message.Content')
- [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')