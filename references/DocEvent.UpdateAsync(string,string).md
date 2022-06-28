---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits [content](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).content') or [title](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).title') of the doc."
---

## DocEvent.UpdateAsync(string, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`DocEvent`](DocEvent 'Guilded.Base.Events.DocEvent')

Edits [content](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).content') or [title](DocEvent.UpdateAsync(string,string)#Guilded.Base.Events.DocEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string).title') of the doc.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Doc> UpdateAsync(string title, string content);
```
#### Parameters

<a name='Guilded.Base.Events.DocEvent.UpdateAsync(string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.Base.Events.DocEvent.UpdateAsync(string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

### Remarks
  
The doc will be bumped to the top.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [document](Doc 'Guilded.Base.Content.Doc')