---
title: IGlobalContent
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents an interface for items that can be both inside a [server](Server 'Guilded.Base.Servers.Server') and outside it."
---

## IGlobalContent Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an interface for items that can be both inside a [server](Server 'Guilded.Base.Servers.Server') and outside it.

```csharp
public interface IGlobalContent :
Guilded.Base.IHasParentClient
```

Implements [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')

| Properties | |
| :--- | :--- |
| [ServerId](IGlobalContent.ServerId 'Guilded.Base.IGlobalContent.ServerId') | Gets the identifier of the [server](Server 'Guilded.Base.Servers.Server') where the item is if it's in a [server](Server 'Guilded.Base.Servers.Server'). |

| Methods | |
| :--- | :--- |
| [GetServerAsync()](IGlobalContent.GetServerAsync() 'Guilded.Base.IGlobalContent.GetServerAsync()') | Gets the specified [server](Server 'Guilded.Base.Servers.Server'). |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')