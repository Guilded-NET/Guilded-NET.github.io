---
title: ListItemNote
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the full information about [the list item's](ListItem 'Guilded.Base.Content.ListItem') note."
---

## ListItemNote Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the full information about [the list item's](ListItem 'Guilded.Base.Content.ListItem') note.

```csharp
public class ListItemNote : Guilded.Base.Content.ListItemNoteSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary') &#129106; ListItemNote

| Constructors | |
| :--- | :--- |
| [ListItemNote(string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Mentions)](ListItemNote.ListItemNote(string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_,Mentions) 'Guilded.Base.Content.ListItemNote.ListItemNote(string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, Guilded.Base.Content.Mentions)') | Initializes a new instance of [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Content](ListItemNote.Content 'Guilded.Base.Content.ListItemNote.Content') | Gets the contents of [the note](ListItemNote 'Guilded.Base.Content.ListItemNote') in [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [Mentions](ListItemNote.Mentions 'Guilded.Base.Content.ListItemNote.Mentions') | Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the content](ListItemNote.Content 'Guilded.Base.Content.ListItemNote.Content'). |
