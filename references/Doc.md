---
title: Doc
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a document in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Docs 'Guilded.Base.Servers.ChannelType.Docs')."
---

## Doc Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a document in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Docs 'Guilded.Base.Servers.ChannelType.Docs').

```csharp
public class Doc : Guilded.Base.Content.TitledContent,
Guilded.Base.Content.IContentMarkdown
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') &#129106; Doc

Implements [IContentMarkdown](IContentMarkdown 'Guilded.Base.Content.IContentMarkdown')

| Constructors | |
| :--- | :--- |
| [Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Mentions)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_,Mentions) 'Guilded.Base.Content.Doc.Doc(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, Guilded.Base.Content.Mentions)') | Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Mentions](Doc.Mentions 'Guilded.Base.Content.Doc.Mentions') | Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the content](TitledContent.Content 'Guilded.Base.Content.TitledContent.Content'). |
| [UpdatedBy](Doc.UpdatedBy 'Guilded.Base.Content.Doc.UpdatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc'). |

| Methods | |
| :--- | :--- |
| [DeleteAsync()](Doc.DeleteAsync() 'Guilded.Base.Content.Doc.DeleteAsync()') | Deletes the doc. |
| [UpdateAsync(string, string)](Doc.UpdateAsync(string,string) 'Guilded.Base.Content.Doc.UpdateAsync(string, string)') | Edits [content](Doc.UpdateAsync(string,string)#Guilded.Base.Content.Doc.UpdateAsync(string,string).content 'Guilded.Base.Content.Doc.UpdateAsync(string, string).content') or [title](Doc.UpdateAsync(string,string)#Guilded.Base.Content.Doc.UpdateAsync(string,string).title 'Guilded.Base.Content.Doc.UpdateAsync(string, string).title') of the doc. |

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [Message](Message 'Guilded.Base.Content.Message')