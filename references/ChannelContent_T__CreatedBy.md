
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')
## ChannelContent&lt;T&gt;.CreatedBy Property

The identifier of the user creator of the content.
```csharp
public Guilded.NET.Base.GId CreatedBy { get; set; }
```


#### Property Value
[GId](GId 'Guilded.NET.Base.GId')  
User ID

### Remarks
  
The identifier of the user that created this content.  
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.