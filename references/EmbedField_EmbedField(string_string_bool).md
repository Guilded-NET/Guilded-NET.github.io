
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
## EmbedField.EmbedField(string, string, bool) Constructor
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
  
### Remarks
Creates a new field with the name [name](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_name 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).name') and a value [value](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_value 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).value').  
The name acts like a title of the field and the value acts like a description.



Fields can be optionally inline(with [inline](EmbedField_EmbedField(string_string_bool)#Guilded_NET_Base_Embeds_EmbedField_EmbedField(string_string_bool)_inline 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool).inline') parameter being [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool')),  
which stacks up to 3 fields in one line. If field is not inline and there are  
surrounding inline fields, it will still not stack with other fields.
