---
title: MessageType
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents the type of a [message](Message.md 'Guilded.Base.Content.Message') that was created or updated."
---

## MessageType Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents the type of a [message](Message.md 'Guilded.Base.Content.Message') that was created or updated.

```csharp
public enum MessageType
```
### Fields

<a name='Guilded.Base.Content.MessageType.Default'></a>

`Default` 0

  
A plain message that holds [normal content](Message.Content.md 'Guilded.Base.Content.Message.Content').  
  
This can be created by anyone.

<a name='Guilded.Base.Content.MessageType.System'></a>

`System` 1

  
A system event that is created once an action is done.  
  
This can't be created by anyone and only occurs if certain actions happen.

### See Also
- [Message](Message.md 'Guilded.Base.Content.Message')