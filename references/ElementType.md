
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ElementType Enum
Type of the message object.  
```csharp
public enum ElementType

```

#### Fields
<a name='Guilded_NET_Base_Chat_ElementType_Block'></a>
`Block` 0  
A block, that is the only thing in a line.  
  
<a name='Guilded_NET_Base_Chat_ElementType_Document'></a>
`Document` 6  
A message document that is found inside message content.  
  
<a name='Guilded_NET_Base_Chat_ElementType_Inline'></a>
`Inline` 1  
Inline, can be multiple of them in one line.  
  
<a name='Guilded_NET_Base_Chat_ElementType_Leaf'></a>
`Leaf` 4  
A piece of text.  
  
<a name='Guilded_NET_Base_Chat_ElementType_Mark'></a>
`Mark` 2  
Marks text in a specific way(bold, italic).  
  
<a name='Guilded_NET_Base_Chat_ElementType_Text'></a>
`Text` 3  
A text object which contains leafs.  
  
<a name='Guilded_NET_Base_Chat_ElementType_Value'></a>
`Value` 5  
Message content which can be found in messages, statuses, forum posts, profile posts.  
  

#### See Also
- [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')
- [Leaf](ElementType#Guilded_NET_Base_Chat_ElementType_Leaf 'Guilded.NET.Base.Chat.ElementType.Leaf')
- [TextContainer](TextContainer 'Guilded.NET.Base.Chat.TextContainer')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
