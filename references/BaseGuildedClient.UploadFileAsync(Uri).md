---
title: UploadFileAsync(Uri)
layout: references
section: references
tags:
  - references
  - method
description: "

Uploads a file to Guilded."
---

## BaseGuildedClient.UploadFileAsync(Uri) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Uploads a file to Guilded.

```csharp
public System.Threading.Tasks.Task<Uri?> UploadFileAsync(Uri url);
```

### Remarks
  
Uploads an image from link [url](BaseGuildedClient.UploadFileAsync(Uri).md#Guilded.Base.BaseGuildedClient.UploadFileAsync(Uri).url 'Guilded.Base.BaseGuildedClient.UploadFileAsync(Uri).url') to Guilded.  
  
The new image uploaded to Guilded will be received as [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') return value.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UploadFileAsync(Uri).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

URL link to an image to upload

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
File URL