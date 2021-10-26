
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
## EmbedField(string, string, bool) Constructor

Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField'), which is optionally inline.
```csharp
public EmbedField(string name, string value, bool inline=false);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the embed

<a name='Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_value'></a>
`value` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description text of the field

<a name='Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_inline'></a>
`inline` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the field should be inline with other fields


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
Either [name](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_name 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') or [value](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_value 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).value') are [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

### Remarks
  
Creates a new field with the name [name](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_name 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') and a value [value](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_value 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).value').