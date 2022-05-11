---
title: MessageContent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the complete contents of a message."
---

## MessageContent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents the complete contents of a message.

```csharp
public class MessageContent : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MessageContent

| Constructors | |
| :--- | :--- |
| [MessageContent()](MessageContent.MessageContent().md 'Guilded.Base.Content.MessageContent.MessageContent()') | Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent') with no content. |
| [MessageContent(string)](MessageContent.MessageContent(string).md 'Guilded.Base.Content.MessageContent.MessageContent(string)') | Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent'). |
| [MessageContent(IList&lt;Embed&gt;, IList&lt;Guid&gt;, Nullable&lt;bool&gt;, Nullable&lt;bool&gt;)](MessageContent.MessageContent(IList_Embed_,IList_Guid_,Nullable_bool_,Nullable_bool_).md 'Guilded.Base.Content.MessageContent.MessageContent(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, System.Collections.Generic.IList<Guid>, System.Nullable<bool>, System.Nullable<bool>)') | Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent') with no content. |

| Properties | |
| :--- | :--- |
| [Content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') | Gets the text contents of the message. |
| [Embeds](MessageContent.Embeds.md 'Guilded.Base.Content.MessageContent.Embeds') | Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains. |
| [IsPrivate](MessageContent.IsPrivate.md 'Guilded.Base.Content.MessageContent.IsPrivate') | Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private. |
| [IsSilent](MessageContent.IsSilent.md 'Guilded.Base.Content.MessageContent.IsSilent') | Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or the mention is silent and does not ping anyone. |
| [OnlyText](MessageContent.OnlyText.md 'Guilded.Base.Content.MessageContent.OnlyText') | Gets whether the message is [text-only](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') and has no other content. |
| [ReplyMessageIds](MessageContent.ReplyMessageIds.md 'Guilded.Base.Content.MessageContent.ReplyMessageIds') | Gets the list of [messages](Message.md 'Guilded.Base.Content.Message') being replied to. |
