
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')
## Reaction.CreatedBy Property

The identifier of the user creator of the reaction.
```csharp
public Guilded.NET.Base.GId CreatedBy { get; set; }
```


#### Property Value
[GId](GId 'Guilded.NET.Base.GId')  
User ID

### Remarks
  
The identifier of the user that created this reaction.  
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.