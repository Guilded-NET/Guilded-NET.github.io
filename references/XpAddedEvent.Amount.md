---
title: Amount
layout: references
section: references
tags:
  - references
  - property
description: "

The amount of XP given to the users.

```csharp
public long Amount { get; }
```"
---

## XpAddedEvent.Amount Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')

The amount of XP given to the users.

```csharp
public long Amount { get; }
```

### Remarks
  
The amount of XP that was given to all users in [Users](XpAddedEvent.Users 'Guilded.NET.Base.Events.XpAddedEvent.Users') set.  
  
This should usually be between 1000 and -1000 amount of XP.

#### Property Value
[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
XP