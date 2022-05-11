---
title: UpdatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the member who updated the document."
---

## Doc.UpdatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Doc`](Doc.md 'Guilded.Base.Content.Doc')

Gets the identifier of the member who updated the document.

```csharp
public System.Nullable<Guilded.Base.HashId> UpdatedBy { get; }
```

### Remarks
  
Only includes the user who updated this document most recently.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
User ID?