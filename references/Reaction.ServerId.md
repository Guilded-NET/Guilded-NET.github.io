---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the reaction](Reaction 'Guilded.Base.Content.Reaction') where the content is."
---

## Reaction.ServerId Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction 'Guilded.Base.Content.Reaction')

Gets the identifier of [the reaction](Reaction 'Guilded.Base.Content.Reaction') where the content is.

```csharp
public System.Nullable<Guilded.Base.HashId> ServerId { get; }
```

### Remarks
  
As some of the content are bound to servers and some can be global, the identifier of [the reaction](Reaction 'Guilded.Base.Content.Reaction') may be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Server ID?

### See Also
- [Reaction](Reaction 'Guilded.Base.Content.Reaction')
- [Id](Reaction.Id 'Guilded.Base.Content.Reaction.Id')