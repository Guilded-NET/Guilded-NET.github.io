---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the user creator of the reaction.

```csharp
public Guilded.NET.Base.HashId CreatedBy { get; }
```"
---

## Reaction.CreatedBy Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Reaction`](Reaction 'Guilded.NET.Base.Content.Reaction')

The identifier of the user creator of the reaction.

```csharp
public Guilded.NET.Base.HashId CreatedBy { get; }
```

### Remarks
  
The identifier of the user that created this reaction.  
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId 'Guilded.NET.Base.HashId')  
User ID