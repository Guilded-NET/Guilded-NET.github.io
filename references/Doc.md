---
title: Doc
layout: references
section: references
tags:
  - references
  - class
description: "

A document in a document channel.

```csharp
public class Doc : Guilded.NET.Base.Content.ChannelContent<uint, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IUpdatableContent,
Guilded.NET.Base.Content.IReactibleContent
```"
---

## Doc Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

A document in a document channel.

```csharp
public class Doc : Guilded.NET.Base.Content.ChannelContent<uint, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IUpdatableContent,
Guilded.NET.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') &#129106; Doc

Implements [IUpdatableContent](IUpdatableContent 'Guilded.NET.Base.Content.IUpdatableContent'), [IReactibleContent](IReactibleContent 'Guilded.NET.Base.Content.IReactibleContent')

### Remarks
  
A document with a [Title](Doc.Title 'Guilded.NET.Base.Content.Doc.Title') and the [Content](Doc.Content 'Guilded.NET.Base.Content.Doc.Content'), similarly to [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread').

| Constructors | |
| :--- | :--- |
| [Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.NET.Base.Content.Doc.Doc(uint, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.DateTime, System.Nullable<Guilded.NET.Base.HashId>, System.Nullable<System.DateTime>)') | Creates a new instance of [Doc](Doc 'Guilded.NET.Base.Content.Doc') with provided details. |

| Properties | |
| :--- | :--- |
| [Content](Doc.Content 'Guilded.NET.Base.Content.Doc.Content') | The contents of the document. |
| [Title](Doc.Title 'Guilded.NET.Base.Content.Doc.Title') | The title of the document. |
| [UpdatedAt](Doc.UpdatedAt 'Guilded.NET.Base.Content.Doc.UpdatedAt') | The date of when the document was updated. |
| [UpdatedBy](Doc.UpdatedBy 'Guilded.NET.Base.Content.Doc.UpdatedBy') | The identifier of the user updater of the document. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Doc.AddReactionAsync(uint) 'Guilded.NET.Base.Content.Doc.AddReactionAsync(uint)') | Adds a reaction to the content. |
| [DeleteDocAsync()](Doc.DeleteDocAsync() 'Guilded.NET.Base.Content.Doc.DeleteDocAsync()') | Deletes the document. |
| [RemoveReactionAsync(uint)](Doc.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Doc.RemoveReactionAsync(uint)') | Removes a reaction from the content. |
| [UpdateDocAsync(string, string)](Doc.UpdateDocAsync(string,string) 'Guilded.NET.Base.Content.Doc.UpdateDocAsync(string, string)') | Updates the document. |
