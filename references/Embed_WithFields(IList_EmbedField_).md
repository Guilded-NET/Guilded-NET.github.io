
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Embeds](index#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.WithFields(IList&lt;EmbedField&gt;) Method
Adds fields to this embed.  
```csharp
public Guilded.NET.Base.Embeds.Embed WithFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField> fields);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_WithFields(System_Collections_Generic_IList_Guilded_NET_Base_Embeds_EmbedField_)_fields'></a>
`fields` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
The list of fields to be added
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
This

#### Exceptions
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
Attempt at trying to add more than 25 fields
