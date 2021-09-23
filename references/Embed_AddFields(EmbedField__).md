
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddFields(EmbedField[]) Method
Adds [fields](Embed_AddFields(EmbedField__)#Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields') to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance.  
```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(params Guilded.NET.Base.Embeds.EmbedField[] fields);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields'></a>
`fields` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
Fields to be added
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
This

#### Exceptions
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
Attempt at trying to add more than 25 fields
### Remarks
If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') will be set as [fields](Embed_AddFields(EmbedField__)#Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields').



If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property has a value, [fields](Embed_AddFields(EmbedField__)#Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields') will be added to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields').



The max field limit per embed is 25. If 25 field limit is exceeded,  
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
