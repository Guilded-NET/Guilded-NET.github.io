---
title: UpdateDocAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the document.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> UpdateDocAsync(string title, string content);
```"
---

## Doc.UpdateDocAsync(string, string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.NET.Base.Content.Doc')

Updates the document.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> UpdateDocAsync(string title, string content);
```

### Remarks
  
Updates/edits the specified document.  
  
This will bump the document to the very top.
#### Parameters

<a name='Guilded.NET.Base.Content.Doc.UpdateDocAsync(string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of this document

<a name='Guilded.NET.Base.Content.Doc.UpdateDocAsync(string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new Markdown content of this document

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.NET.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated document