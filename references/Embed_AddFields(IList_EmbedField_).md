
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.AddFields(IList&lt;EmbedField&gt;) Method
Adds the given fields to the embed.  
```csharp
public Guilded.NET.Base.Embeds.Embed AddFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField> fields);
```

#### Parameters
<a name='Guilded_NET_Base_Embeds_Embed_AddFields(System_Collections_Generic_IList_Guilded_NET_Base_Embeds_EmbedField_)_fields'></a>
`fields` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
The list of fields to be added
  

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance

#### Exceptions
[System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException')  
When the combined field list exceeds max field limit of `25`
### Remarks
Adds the [fields](Embed_AddFields(IList_EmbedField_)#Guilded_NET_Base_Embeds_Embed_AddFields(System_Collections_Generic_IList_Guilded_NET_Base_Embeds_EmbedField_)_fields 'Guilded.NET.Base.Embeds.Embed.AddFields(System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.EmbedField&gt;).fields') parameter to [Fields](Embed_Fields 'Guilded.NET.Base.Embeds.Embed.Fields') property.



The max field limit per embed is 25. If 25 field limit is exceeded, [System.OverflowException](https://docs.microsoft.com/en-us/dotnet/api/System.OverflowException 'System.OverflowException') will be thrown.
