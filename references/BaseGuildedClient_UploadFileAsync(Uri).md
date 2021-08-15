#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UploadFileAsync(Uri) Method
Uploads a file to Guilded.  
```csharp
public System.Threading.Tasks.Task<System.Uri> UploadFileAsync(System.Uri url);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(System_Uri)_url'></a>
`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
A URL link to an image to uplod
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
File URL
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Remarks
Uploads a file from link [url](BaseGuildedClient_UploadFileAsync(Uri).md#Guilded_NET_Base_BaseGuildedClient_UploadFileAsync(System_Uri)_url 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri).url') to Guilded.  
