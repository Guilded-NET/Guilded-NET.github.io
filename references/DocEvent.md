---
title: DocEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId')."
---

## DocEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').

```csharp
public class DocEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; DocEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [DocEvent(Doc, HashId)](DocEvent.DocEvent(Doc,HashId) 'Guilded.Base.Events.DocEvent.DocEvent(Guilded.Base.Content.Doc, Guilded.Base.HashId)') | Initializes a new instance of [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [Content](DocEvent.Content 'Guilded.Base.Events.DocEvent.Content') | Gets the text contents of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [CreatedAt](DocEvent.CreatedAt 'Guilded.Base.Events.DocEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](DocEvent.CreatedBy 'Guilded.Base.Events.DocEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') | Gets the document received from the event. |
| [ServerId](DocEvent.ServerId 'Guilded.Base.Events.DocEvent.ServerId') | Gets the identifier of the server where the event occurred. |
| [Title](DocEvent.Title 'Guilded.Base.Events.DocEvent.Title') | Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [UpdatedAt](DocEvent.UpdatedAt 'Guilded.Base.Events.DocEvent.UpdatedAt') | Gets the date when the content were updated. |
| [UpdatedBy](DocEvent.UpdatedBy 'Guilded.Base.Events.DocEvent.UpdatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc'). |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](DocEvent.AddReactionAsync(uint) 'Guilded.Base.Events.DocEvent.AddReactionAsync(uint)') | Adds emote to the content. |
| [DeleteAsync()](DocEvent.DeleteAsync() 'Guilded.Base.Events.DocEvent.DeleteAsync()') | Deletes the doc. |
| [UpdateAsync(string, string)](DocEvent.UpdateAsync(string,string) 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string)') | Edits [content](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).content') or [title](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).title') of the doc. |

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')