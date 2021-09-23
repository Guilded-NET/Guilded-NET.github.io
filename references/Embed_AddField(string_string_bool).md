
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddField(string, string, bool) Method
Adds the given field to the embed.  
```csharp
public Guilded.NET.Base.Embeds.Embed AddField(string name, string value, bool inline=false);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_AddField(string_string_bool)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The title of the field
  
<a name='Guilded_NET_Base_Embeds_Embed_AddField(string_string_bool)_value'></a>
`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The description of the field
  
<a name='Guilded_NET_Base_Embeds_Embed_AddField(string_string_bool)_inline'></a>
`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
If this field should be inline
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance

#### Exceptions
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`
### Remarks
Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') with given parameters and adds it to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.



The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
