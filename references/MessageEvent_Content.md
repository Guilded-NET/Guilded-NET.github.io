
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.Content Property

The contents of the message.
```csharp
public string Content { get; }
```


#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Content in Markdown

### Remarks
  
The contents of the message in Markdown format.  
  
This includes images and videos, which are in the format of `![](source_url)`.