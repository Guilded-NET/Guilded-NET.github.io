---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the user creator of the content.

```csharp
public Guilded.NET.Base.HashId CreatedBy { get; }
```"
---

## ChannelContent<T,S>.CreatedBy Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ChannelContent<T,S>`](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')

The identifier of the user creator of the content.

```csharp
public Guilded.NET.Base.HashId CreatedBy { get; }
```

### Remarks
  
The identifier of the user that created this content.  
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId 'Guilded.NET.Base.HashId')  
User ID