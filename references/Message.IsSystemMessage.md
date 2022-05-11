---
title: IsSystemMessage
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System')."
---

## Message.IsSystemMessage Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System').

```csharp
public bool IsSystemMessage { get; }
```

### Remarks
  
A [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System') is a message that is created automatically on specific events, such as renaming the channel. Usually, it's something like "User has renamed the channel from X to Y"

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[Message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System')

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [Content](Message.Content 'Guilded.Base.Content.Message.Content')
- [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')
- [Type](Message.Type 'Guilded.Base.Content.Message.Type')