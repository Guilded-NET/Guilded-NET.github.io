---
title: RootCommand
layout: references
section: references
tags:
  - references
  - property
description: "

Getss the most-top command that was invoked."
---

## CommandEvent.RootCommand Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Getss the most-top command that was invoked.

```csharp
public Guilded.Commands.RootCommandContext RootCommand { get; }
```

### Example
  
Let's say we have this command structure:  
  
```csharp  
- `config` command  
    - `items` command  
        - `add` command with arguments (string name)  
```  
  
Even if we invoke <q>config items add</q> command, the root command will always remain <q>config</q>.

#### Property Value
[RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext')  
Command context