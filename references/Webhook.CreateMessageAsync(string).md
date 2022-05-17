---
title: CreateMessageAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook."
---

## Webhook.CreateMessageAsync(string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(string message);
```

### Remarks
  
The content will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')