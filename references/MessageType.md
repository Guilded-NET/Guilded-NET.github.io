---
title: MessageType
layout: references
section: references
tags:
  - references
  - enum
description: "

The type of the message created or updated.

```csharp
public enum MessageType
```"
---

## MessageType Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

The type of the message created or updated.

```csharp
public enum MessageType
```

### Remarks
  
Defines the type of a [Message](Message 'Guilded.NET.Base.Content.Message') instance. Currently only [Default](MessageType#Guilded.NET.Base.Content.MessageType.Default 'Guilded.NET.Base.Content.MessageType.Default') and [System](MessageType#Guilded.NET.Base.Content.MessageType.System 'Guilded.NET.Base.Content.MessageType.System') are available.
### Fields

<a name='Guilded.NET.Base.Content.MessageType.Default'></a>

`Default` 0

  
A plain message that holds [Content](Message.Content 'Guilded.NET.Base.Content.Message.Content').  
  
This can be created by anyone.

<a name='Guilded.NET.Base.Content.MessageType.System'></a>

`System` 1

  
A system event that is created once some action is done.  
  
This can't be created by anyone and only occurs if certain actions happen.

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')