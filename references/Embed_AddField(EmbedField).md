
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddField(EmbedField) Method

Adds the given field to the embed.
```csharp
public Guilded.NET.Base.Embeds.Embed AddField(Guilded.NET.Base.Embeds.EmbedField field);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field'></a>
`field` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')

A field to add


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

### Remarks
  
Adds the [field](Embed_AddField(EmbedField)#Guilded_NET_Base_Embeds_Embed_AddField(Guilded_NET_Base_Embeds_EmbedField)_field 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField).field') parameter to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.