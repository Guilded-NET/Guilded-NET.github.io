---
title: MessageContent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the contents of the message.

```csharp
public class MessageContent : Guilded.NET.Base.BaseObject
```"
---

## MessageContent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

Represents the contents of the message.

```csharp
public class MessageContent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; MessageContent

### Remarks
  
Defines the contents of the message with which a chat message can be created.

| Constructors | |
| :--- | :--- |
| [MessageContent()](MessageContent.MessageContent() 'Guilded.NET.Base.Content.MessageContent.MessageContent()') | Creates an instance of [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent') with no content. |
| [MessageContent(string)](MessageContent.MessageContent(string) 'Guilded.NET.Base.Content.MessageContent.MessageContent(string)') | Creates an instance of [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent'). |

| Properties | |
| :--- | :--- |
| [Content](MessageContent.Content 'Guilded.NET.Base.Content.MessageContent.Content') | The contents of the message. |
| [Embeds](MessageContent.Embeds 'Guilded.NET.Base.Content.MessageContent.Embeds') | The list of embeds in the message. |
| [IsPrivate](MessageContent.IsPrivate 'Guilded.NET.Base.Content.MessageContent.IsPrivate') | Whether the reply is private. |
| [ReplyMessageIds](MessageContent.ReplyMessageIds 'Guilded.NET.Base.Content.MessageContent.ReplyMessageIds') | The list of messages being replied to. |
