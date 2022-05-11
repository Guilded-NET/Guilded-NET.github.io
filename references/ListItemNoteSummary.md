---
title: ListItemNoteSummary
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the summary of [the list item's](ListItemSummary 'Guilded.Base.Content.ListItemSummary') note."
---

## ListItemNoteSummary Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the summary of [the list item's](ListItemSummary 'Guilded.Base.Content.ListItemSummary') note.

```csharp
public class ListItemNoteSummary : Guilded.Base.BaseObject,
Guilded.Base.Content.ICreatableContent,
Guilded.Base.Content.IUpdatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; ListItemNoteSummary

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent'), [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')

Derived  
&#8627; [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')

| Constructors | |
| :--- | :--- |
| [ListItemNoteSummary(HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNoteSummary.ListItemNoteSummary(HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.ListItemNoteSummary.ListItemNoteSummary(Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)') | Initializes a new instance of [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](ListItemNoteSummary.CreatedAt 'Guilded.Base.Content.ListItemNoteSummary.CreatedAt') | the date when the note was created. |
| [CreatedBy](ListItemNoteSummary.CreatedBy 'Guilded.Base.Content.ListItemNoteSummary.CreatedBy') | The identifier of [user](User 'Guilded.Base.Users.User') that created the note. |
| [UpdatedAt](ListItemNoteSummary.UpdatedAt 'Guilded.Base.Content.ListItemNoteSummary.UpdatedAt') | the date when the note was edited. |
| [UpdatedBy](ListItemNoteSummary.UpdatedBy 'Guilded.Base.Content.ListItemNoteSummary.UpdatedBy') | The identifier of [user](User 'Guilded.Base.Users.User') that updated the note. |
