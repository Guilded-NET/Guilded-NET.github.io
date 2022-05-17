---
title: SerializerSettings
layout: references
section: references
tags:
  - references
  - property
description: "

Settings for [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest') client's JSON (de)serialization."
---

## BaseGuildedClient.SerializerSettings Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Settings for [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest') client's JSON (de)serialization.

```csharp
public Newtonsoft.Json.JsonSerializerSettings SerializerSettings { get; set; }
```

### Remarks
  
JSON settings that are used in [GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.Base.BaseGuildedClient.GuildedSerializer') and [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest').

#### Property Value
[Newtonsoft.Json.JsonSerializerSettings](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.JsonSerializerSettings 'Newtonsoft.Json.JsonSerializerSettings')  
Serializer Settings

### See Also
- [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest')
- [GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.Base.BaseGuildedClient.GuildedSerializer')