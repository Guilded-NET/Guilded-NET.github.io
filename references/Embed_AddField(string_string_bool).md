
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddField(string, string, bool) Method
Adds a new [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') instance to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance.  
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
This
### Remarks
Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')  
with name/title [name](Embed_AddField(string_string_bool)#Guilded_NET_Base_Embeds_Embed_AddField(string_string_bool)_name 'Guilded.NET.Base.Embeds.Embed.AddField(string, string, bool).name')  
and value/description [value](Embed_AddField(string_string_bool)#Guilded_NET_Base_Embeds_Embed_AddField(string_string_bool)_value 'Guilded.NET.Base.Embeds.Embed.AddField(string, string, bool).value').



If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') will be set as a list with one field [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') instance.



If [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property has a value, [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') instance will be added to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields').



The max field limit per embed is 25. If 25 field limit is exceeded,  
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
