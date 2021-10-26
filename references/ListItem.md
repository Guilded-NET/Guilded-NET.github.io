
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## ListItem Class

A list item in a list channel.
```csharp
public class ListItem : Guilded.NET.Base.Content.ChannelContent<System.Guid>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;') &#x27A1; ListItem

### Remarks
  
A list item in a list channel with an optional [Note](ListItem_Note 'Guilded.NET.Base.Content.ListItem.Note').  
  
It can only be found as a return value when creating a list item.

### See Also
- [Message](ListItem_Message 'Guilded.NET.Base.Content.ListItem.Message')
- [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')

| Properties | |
| :--- | :--- |
| [Message](ListItem_Message 'Guilded.NET.Base.Content.ListItem.Message') | The content of this item's message. |
| [Note](ListItem_Note 'Guilded.NET.Base.Content.ListItem.Note') | The content of this item's note. |
