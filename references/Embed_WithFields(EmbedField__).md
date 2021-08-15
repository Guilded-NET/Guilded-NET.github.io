#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base.md#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed.md 'Guilded.NET.Base.Embeds.Embed')
## Embed.WithFields(EmbedField[]) Method
Adds fields to this embed.  
```csharp
public Guilded.NET.Base.Embeds.Embed WithFields(params Guilded.NET.Base.Embeds.EmbedField[] fields);
```
#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_WithFields(Guilded_NET_Base_Embeds_EmbedField__)_fields'></a>
`fields` [EmbedField](EmbedField.md 'Guilded.NET.Base.Embeds.EmbedField')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
Fields to be added
  
#### Returns
[Embed](Embed.md 'Guilded.NET.Base.Embeds.Embed')  
This
#### Exceptions
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
Attempt at trying to add more than 25 fields
