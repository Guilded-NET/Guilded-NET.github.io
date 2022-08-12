---
title: IsFromSlowmode
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether [too many request error](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') was caused by [channel's slowmode settingss](ServerChannel 'Guilded.Base.Servers.ServerChannel')."
---

## GuildedTooManyRequestsException.IsFromSlowmode Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedTooManyRequestsException`](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')

Gets whether [too many request error](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') was caused by [channel's slowmode settingss](ServerChannel 'Guilded.Base.Servers.ServerChannel').

```csharp
public bool IsFromSlowmode { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[Error](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') comes from [channel's slowmode](ServerChannel 'Guilded.Base.Servers.ServerChannel')

### See Also
- [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')
- [TimeLeft](GuildedTooManyRequestsException.TimeLeft 'Guilded.Base.GuildedTooManyRequestsException.TimeLeft')