---
title: ParentClient
layout: references
section: references
tags:
  - references
  - property
description: "

The parent client that adopts this object.

```csharp
public Guilded.NET.Base.BaseGuildedClient ParentClient { get; set; }
```"
---

## ClientObject.ParentClient Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ClientObject`](ClientObject 'Guilded.NET.Base.ClientObject')

The parent client that adopts this object.

```csharp
public Guilded.NET.Base.BaseGuildedClient ParentClient { get; set; }
```

### Remarks
  
The parent client that deserialized this object. This is initiated via internal OnDeserialized method and only available after deserialization, but not during it.

#### Property Value
[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')  
Client