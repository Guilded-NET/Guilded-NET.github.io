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
public System.Nullable<bool> IsPrivate { get; set; }
```"
---

## MessageContent.IsPrivate Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MessageContent`](MessageContent 'Guilded.NET.Base.Content.MessageContent')

Whether the reply is private.

```csharp
public System.Nullable<bool> IsPrivate { get; set; }
```

### Remarks
  
Specifies whether the reply is private or not.  
  
This can only be [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') if [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') has a value.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Reply is private