---
title: ListItemNoteSummary
layout: references
section: references
tags:
  - references
  - class
description: "

The summary of the list item's note."
---

## ListItemNoteSummary Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

The summary of the list item's note.

```csharp
public class ListItemNoteSummary : Guilded.Base.BaseObject,
Guilded.Base.Content.ICreatableContent,
Guilded.Base.Content.IUpdatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; ListItemNoteSummary

Implements [ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent'), [IUpdatableContent](IUpdatableContent.md 'Guilded.Base.Content.IUpdatableContent')

Derived  
&#8627; [ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')

### Remarks
  
The minimal information about the list item's note.

| Constructors | |
| :--- | :--- |
| [ListItemNoteSummary(HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNoteSummary.ListItemNoteSummary(HashId,DateTime,Nullable_HashId_,Nullable_DateTime_).md 'Guilded.Base.Content.ListItemNoteSummary.ListItemNoteSummary(Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)') | Initializes a new instance of [ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](ListItemNoteSummary.CreatedAt.md 'Guilded.Base.Content.ListItemNoteSummary.CreatedAt') | The date of when the note was created. |
| [CreatedBy](ListItemNoteSummary.CreatedBy.md 'Guilded.Base.Content.ListItemNoteSummary.CreatedBy') | The identifier of [user](User.md 'Guilded.Base.Users.User') that created the note. |
| [UpdatedAt](ListItemNoteSummary.UpdatedAt.md 'Guilded.Base.Content.ListItemNoteSummary.UpdatedAt') | The date of when the note was edited. |
| [UpdatedBy](ListItemNoteSummary.UpdatedBy.md 'Guilded.Base.Content.ListItemNoteSummary.UpdatedBy') | The identifier of [user](User.md 'Guilded.Base.Users.User') that updated the note. |
