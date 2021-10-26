
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetDescription(string) Method

Sets the description as the given parameter.
```csharp
public Guilded.NET.Base.Embeds.Embed SetDescription(string description);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetDescription(string)_description'></a>
`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Embed's description


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[description](Embed_SetDescription(string)#Guilded_NET_Base_Embeds_Embed_SetDescription(string)_description 'Guilded.NET.Base.Embeds.Embed.SetDescription(string).description') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
[description](Embed_SetDescription(string)#Guilded_NET_Base_Embeds_Embed_SetDescription(string)_description 'Guilded.NET.Base.Embeds.Embed.SetDescription(string).description') exceeds 4000 character limit