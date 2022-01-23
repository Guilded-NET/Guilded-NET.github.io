---
title: IsPrivate
layout: references
section: references
tags:
  - references
  - property
description: "

Whether the reply is private.

```csharp
public bool IsPrivate { get; }
```"
---

## Message.IsPrivate Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Message`](Message 'Guilded.NET.Base.Content.Message')

Whether the reply is private.

```csharp
public bool IsPrivate { get; }
```

### Remarks
  
Specifies whether the reply is private or not.  
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') has a value.

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Reply is private