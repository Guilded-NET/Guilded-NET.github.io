
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UploadFileAsync(string, byte[]) Method
Uploads a file to Guilded.  
```csharp
public System.Threading.Tasks.Task<System.Uri> UploadFileAsync(string filename, byte[] filedata);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte__)_filename'></a>
`filename` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the file being uploaded
  
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte__)_filedata'></a>
`filedata` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The contents of the file being uploaded
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
File URL

#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
When [filename](BaseGuildedClient_UploadFileAsync(string_byte__)#Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(string_byte__)_filename 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[]).filename') is empty or null
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Remarks
Uploads any image, text or document file to Guilded with content type automatically assigned.  
