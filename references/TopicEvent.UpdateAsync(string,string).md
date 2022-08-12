---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).title') and [content](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).content')."
---

## TopicEvent.UpdateAsync(string, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TopicEvent`](TopicEvent 'Guilded.Base.Events.TopicEvent')

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).title') and [content](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).content').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Topic> UpdateAsync(string title, string content);
```
#### Parameters

<a name='Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of the [forum topic](Topic 'Guilded.Base.Content.Topic')

<a name='Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).content'></a>

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