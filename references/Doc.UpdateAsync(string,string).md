---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).content 'Guilded.Base.Content.Doc.UpdateAsync(string, string).content') or the [title](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).title 'Guilded.Base.Content.Doc.UpdateAsync(string, string).title') of a doc in a channel."
---

## Doc.UpdateAsync(string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Doc`](Doc.md 'Guilded.Base.Content.Doc')

Edits the [content](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).content 'Guilded.Base.Content.Doc.UpdateAsync(string, string).content') or the [title](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).title 'Guilded.Base.Content.Doc.UpdateAsync(string, string).title') of a doc in a channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Doc> UpdateAsync(string title, string content);
```

### Remarks
  
The updated document will be bumped to the top.
#### Parameters

<a name='Guilded.Base.Content.Doc.UpdateAsync(string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.Base.Content.Doc.UpdateAsync(string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated document