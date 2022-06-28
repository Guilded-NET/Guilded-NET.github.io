---
title: DefaultSplitOptions
layout: references
section: references
tags:
  - references
  - field
description: "

The default splitting options for command arguments."
---

## CommandConfiguration.DefaultSplitOptions Field
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandConfiguration`](CommandConfiguration 'Guilded.Commands.CommandConfiguration')

The default splitting options for command arguments.

```csharp
public const StringSplitOptions DefaultSplitOptions = 1;
```

### Remarks
  
By default, it uses [System.StringSplitOptions.RemoveEmptyEntries](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions.RemoveEmptyEntries 'System.StringSplitOptions.RemoveEmptyEntries').