
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetDescription(IFormatProvider, string, object[]) Method
Sets [Description](Embed_Description 'Guilded.NET.Base.Embeds.Embed.Description') as [format](Embed_SetDescription(IFormatProvider_string_object__)#Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_format 'Guilded.NET.Base.Embeds.Embed.SetDescription(System.IFormatProvider, string, object[]).format') of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance.  
```csharp
public Guilded.NET.Base.Embeds.Embed SetDescription(System.IFormatProvider provider, string format, params object[] args);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_provider'></a>
`provider` [System.IFormatProvider](https://docs.microsoft.com/en-us/dotnet/api/System.IFormatProvider 'System.IFormatProvider')  
The provider that gives the format string information about the culture
  
<a name='Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_format'></a>
`format` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The composite format string
  
<a name='Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_args'></a>
`args` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The arguments of the format string
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
This
### Remarks
Formats [format](Embed_SetDescription(IFormatProvider_string_object__)#Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_format 'Guilded.NET.Base.Embeds.Embed.SetDescription(System.IFormatProvider, string, object[]).format') with arguments [args](Embed_SetDescription(IFormatProvider_string_object__)#Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_args 'Guilded.NET.Base.Embeds.Embed.SetDescription(System.IFormatProvider, string, object[]).args')  
and culture [provider](Embed_SetDescription(IFormatProvider_string_object__)#Guilded_NET_Base_Embeds_Embed_SetDescription(System_IFormatProvider_string_object__)_provider 'Guilded.NET.Base.Embeds.Embed.SetDescription(System.IFormatProvider, string, object[]).provider') using [System.String.Format(System.IFormatProvider,System.String,System.Object[])](https://docs.microsoft.com/en-us/dotnet/api/System.String.Format#System_String_Format_System_IFormatProvider,System_String,System_Object[]_ 'System.String.Format(System.IFormatProvider,System.String,System.Object[])')  
and sets the formatted string to [Description](Embed_Description 'Guilded.NET.Base.Embeds.Embed.Description').
