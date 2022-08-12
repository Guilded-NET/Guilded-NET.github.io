---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).title 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).title') and [content](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).content 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).content')."
---

## TopicSummary.UpdateAsync(string, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TopicSummary`](TopicSummary 'Guilded.Base.Content.TopicSummary')

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).title 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).title') and [content](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).content 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).content').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Topic> UpdateAsync(string title, string content);
```
#### Parameters

<a name='Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of the [forum topic](Topic 'Guilded.Base.Content.Topic')

<a name='Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new contents of the [forum topic](Topic 'Guilded.Base.Content.Topic')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Topic](Topic 'Guilded.Base.Content.Topic')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [forum topic](Topic 'Guilded.Base.Content.Topic')