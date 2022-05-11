---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the server where the content is."
---

## Reaction.ServerId Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction.md 'Guilded.Base.Content.Reaction')

Gets the identifier of the server where the content is.

```csharp
public System.Nullable<Guilded.Base.HashId> ServerId { get; }
```

### Remarks
  
As some of the content are bound to servers and some can be global, the identifier of the server may be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Server ID?