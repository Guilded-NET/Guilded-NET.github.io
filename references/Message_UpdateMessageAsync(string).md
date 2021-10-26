
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[Message](Message 'Guilded.NET.Base.Content.Message')
## Message.UpdateMessageAsync(string) Method

Updates the message.
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> UpdateMessageAsync(string content);
```

#### Parameters

<a name='Guilded_NET_Base_Content_Message_UpdateMessageAsync(string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message updated


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message_UpdateMessageAsync(string)#Guilded_NET_Base_Content_Message_UpdateMessageAsync(string)_content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](Message_UpdateMessageAsync(string)#Guilded_NET_Base_Content_Message_UpdateMessageAsync(string)_content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') is above the message limit of 4000 characters

### Remarks
  
Edits the contents of the specified message.  
  
The [content](Message_UpdateMessageAsync(string)#Guilded_NET_Base_Content_Message_UpdateMessageAsync(string)_content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') will be formatted in Markdown.