#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UploadFileAsync(string, byte[], string) Method
Uploads a file to Guilded.  
```csharp
public System.Threading.Tasks.Task<System.Uri> UploadFileAsync(string filename, byte[] filedata, string contentType);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte___string)_filename'></a>
`filename` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the file being uploaded
  
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte___string)_filedata'></a>
`filedata` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The contents of the file being uploaded
  
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte___string)_contentType'></a>
`contentType` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Content type for multipart form data
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
File URL
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
When [filename](BaseGuildedClient_UploadFileAsync(string_byte___string).md#Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte___string)_filename 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string).filename') is empty or null
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Remarks
Uploads any image, text or document file to Guilded with content type as [contentType](BaseGuildedClient_UploadFileAsync(string_byte___string).md#Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte___string)_contentType 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string).contentType').  
