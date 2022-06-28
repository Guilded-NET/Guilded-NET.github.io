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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the summary of [the list item's](ListItemSummary 'Guilded.Base.Content.ListItemSummary') note.

```csharp
public class ListItemNoteSummary : Guilded.Base.BaseModel,
Guilded.Base.Content.ICreatableContent,
Guilded.Base.Content.IUpdatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; ListItemNoteSummary

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent'), [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')

Derived  
&#8627; [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')

| Constructors | |
| :--- | :--- |
| [ListItemNoteSummary(HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNoteSummary.ListItemNoteSummary(HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.ListItemNoteSummary.ListItemNoteSummary(Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)') | Initializes a new instance of [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedAt](ListItemNoteSummary.CreatedAt 'Guilded.Base.Content.ListItemNoteSummary.CreatedAt') | Gets the date when [the note](ListItemNote 'Guilded.Base.Content.ListItemNote') was created. |
| [CreatedBy](ListItemNoteSummary.CreatedBy 'Guilded.Base.Content.ListItemNoteSummary.CreatedBy') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') who created [the note](ListItemNote 'Guilded.Base.Content.ListItemNote'). |
| [UpdatedAt](ListItemNoteSummary.UpdatedAt 'Guilded.Base.Content.ListItemNoteSummary.UpdatedAt') | Gets the date when [the note](ListItemNote 'Guilded.Base.Content.ListItemNote') was edited. |
| [UpdatedBy](ListItemNoteSummary.UpdatedBy 'Guilded.Base.Content.ListItemNoteSummary.UpdatedBy') | The identifier of [the user](User 'Guilded.Base.Users.User') who updated [the note](ListItemNote 'Guilded.Base.Content.ListItemNote'). |
