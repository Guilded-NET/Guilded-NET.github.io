
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetColor(int) Method

Sets the colour as the given parameter.
```csharp
public Guilded.NET.Base.Embeds.Embed SetColor(int argb);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetColor(int)_argb'></a>
`argb` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The value of the colour


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance

### Example
```csharp  
// Alpha channel is ignored  
embed.SetColor(0xFFFFFF);  
```

### Remarks
  
Sets [Color](Embed_Color 'Guilded.NET.Base.Embeds.Embed.Color') as a new instance of [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') from parameter [argb](Embed_SetColor(int)#Guilded_NET_Base_Embeds_Embed_SetColor(int)_argb 'Guilded.NET.Base.Embeds.Embed.SetColor(int).argb') in RGB format.