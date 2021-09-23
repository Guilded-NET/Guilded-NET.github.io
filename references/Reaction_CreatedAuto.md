
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')
## Reaction.CreatedAuto Property
Gets whether the message was created by a bot or webhook.  
```csharp
public bool CreatedAuto { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')
### Remarks
Whether the message was automatically posted by a bot or a webhook.



This relies on [CreatedByBot](Reaction_CreatedByBot 'Guilded.NET.Base.Content.Reaction.CreatedByBot') and [CreatedByWebhook](Reaction_CreatedByWebhook 'Guilded.NET.Base.Content.Reaction.CreatedByWebhook') properties.  
If one of them is not [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') will be returned. Otherwise,  
[false](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool') will be returned.
