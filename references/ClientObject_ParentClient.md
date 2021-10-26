
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')
## ClientObject.ParentClient Property

The parent client that adopts this object.
```csharp
public Guilded.NET.Base.BaseGuildedClient ParentClient { get; set; }
```


#### Property Value
[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')  
Client

### Remarks
  
The parent client that deserialized this object. This is initiated via internal OnDeserialized method and only available after deserialization, but not during it.