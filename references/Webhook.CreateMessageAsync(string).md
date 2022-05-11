---
title: CreateMessageAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing only content in a chat using a webhook."
---

## Webhook.CreateMessageAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Creates a message with content containing only content in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(string message);
```

### Remarks
  
The text content will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')