
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddField(EmbedField) Method
Adds one [field](Embed_AddField(EmbedField)#Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field') to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance.  
```csharp
public Guilded.NET.Base.Embeds.Embed AddField(Guilded.NET.Base.Embeds.EmbedField field);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field'></a>
`field` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')  
A field to be added
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
This
### Remarks
If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') will be set as a list with one field [field](Embed_AddField(EmbedField)#Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field').



If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property has a value, [field](Embed_AddField(EmbedField)#Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field') will be added to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields').



The max field limit per embed is 25. If 25 field limit is exceeded,  
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
