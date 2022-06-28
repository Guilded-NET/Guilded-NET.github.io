---
title: UploadFileAsync(string, byte[])
layout: references
section: references
tags:
  - references
  - method
description: "

Uploads a file to Guilded."
---

## BaseGuildedClient.UploadFileAsync(string, byte[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Uploads a file to Guilded.

```csharp
public System.Threading.Tasks.Task<Uri?> UploadFileAsync(string filename, byte[] filedata);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UploadFileAsync(string,byte[]).filename'></a>

`filename` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the file being uploaded

<a name='Guilded.Base.BaseGuildedClient.UploadFileAsync(string,byte[]).filedata'></a>

`filedata` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The contents of the file being uploaded

### Remarks
  
Uploads any image, text or document file to Guilded with content type automatically assigned.  
  
The new image uploaded to Guilded will be received as [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') return value.

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When [filename](BaseGuildedClient.UploadFileAsync(string,byte[])#Guilded.Base.BaseGuildedClient.UploadFileAsync(string,byte[]).filename 'Guilded.Base.BaseGuildedClient.UploadFileAsync(string, byte[]).filename') is empty or [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
File URL