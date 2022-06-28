---
title: Name
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the overriden name of the command."
---

## CommandAttribute.Name Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandAttribute`](CommandAttribute 'Guilded.Commands.CommandAttribute')

Gets the overriden name of the command.

```csharp
public string? Name { get; set; }
```

### Remarks
  
By default, lowercase name of the method will be used. `Async` and `Command` will also be trimmed from the end if the name comes from the method.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Name?