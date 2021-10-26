
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds')
## EmbedField Class

A field in an embed.
```csharp
public class EmbedField : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; EmbedField

### Remarks
  
Displays a field with its own description/value and title/name. Fields can be both inline and blocks. They are only inline if [Inline](EmbedField_Inline 'Guilded.NET.Base.Embeds.EmbedField.Inline') parameter is [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').

### See Also
- [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
- [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')

| Constructors | |
| :--- | :--- |
| [EmbedField(string, string, bool)](EmbedField_EmbedField(string_string_bool) 'Guilded.NET.Base.Embeds.EmbedField.EmbedField(string, string, bool)') | Creates a new instance of [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField'), which is optionally inline. |

| Properties | |
| :--- | :--- |
| [Inline](EmbedField_Inline 'Guilded.NET.Base.Embeds.EmbedField.Inline') | Whether the field should be inline with other fields. |
| [Name](EmbedField_Name 'Guilded.NET.Base.Embeds.EmbedField.Name') | The title of the embed. |
| [Value](EmbedField_Value 'Guilded.NET.Base.Embeds.EmbedField.Value') | The description text of the field. |
