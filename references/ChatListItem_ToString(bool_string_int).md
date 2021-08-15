#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[ChatListItem](ChatListItem.md 'Guilded.NET.Base.Chat.ChatListItem')
## ChatListItem.ToString(bool, string, int) Method
Converts [ChatListItem](ChatListItem.md 'Guilded.NET.Base.Chat.ChatListItem') to its string equivalent with bullet prefix.  
```csharp
public string ToString(bool isOrdered, string indent, int index=0);
```
#### Parameters
<a name='Guilded_NET_Base_Chat_ChatListItem_ToString(bool_string_int)_isOrdered'></a>
`isOrdered` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Whether the list item is numbered or bulleted
  
<a name='Guilded_NET_Base_Chat_ChatListItem_ToString(bool_string_int)_indent'></a>
`indent` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The indent of this list item
  
<a name='Guilded_NET_Base_Chat_ChatListItem_ToString(bool_string_int)_index'></a>
`index` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The index of the list item in the list
  
#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
[ChatListItem](ChatListItem.md 'Guilded.NET.Base.Chat.ChatListItem') as string
