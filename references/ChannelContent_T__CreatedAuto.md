
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')
## ChannelContent&lt;T&gt;.CreatedAuto Property
Gets whether the content was created by a bot or a webhook.  
```csharp
public bool CreatedAuto { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
### Remarks
Whether the content was automatically created by a bot or a webhook.



This relies on [CreatedByBot](ChannelContent_T__CreatedByBot 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedByBot') and [CreatedByWebhook](ChannelContent_T__CreatedByWebhook 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.CreatedByWebhook') properties.  
If one of them is not [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') will be returned. Otherwise,  
[false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') will be returned.
