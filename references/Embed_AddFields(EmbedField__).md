
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddFields(EmbedField[]) Method

Adds the given fields to the embed.
```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(params Guilded.NET.Base.Embeds.EmbedField[] fields);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields'></a>
`fields` [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of fields to be added


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`

### Remarks
  
Adds the [fields](Embed_AddFields(EmbedField__)#Guilded_NET_Base_Embeds_Embed_AddFields(Guilded_NET_Base_Embeds_EmbedField__)_fields 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[]).fields') parameter to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.  
  
The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.