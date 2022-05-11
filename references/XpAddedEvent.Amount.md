---
title: Amount
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the amount of XP given to the [users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users')."
---

## XpAddedEvent.Amount Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')

Gets the amount of XP given to the [users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users').

```csharp
public long Amount { get; }
```

### Remarks
  
This should usually be between `1000` and `-1000` amount of XP.

#### Property Value
[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
XP