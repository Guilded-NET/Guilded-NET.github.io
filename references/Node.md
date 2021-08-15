#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Node Class
A node in a rich text markup tree.  
```csharp
public abstract class Node : Guilded.NET.Base.Chat.ChatElement
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; Node  

Derived  
&#8627; [ContainerNode&lt;T,R&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')  

| Constructors | |
| :--- | :--- |
| [Node(NodeType, ElementType, ElementData)](Node_Node(NodeType_ElementType_ElementData).md 'Guilded.NET.Base.Chat.Node.Node(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData)') | Represents a node part of message content tree.<br/> |
| [Node(NodeType, ElementType)](Node_Node(NodeType_ElementType).md 'Guilded.NET.Base.Chat.Node.Node(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType)') | Represents a node part of message content tree.<br/> |

| Properties | |
| :--- | :--- |
| [Data](Node_Data.md 'Guilded.NET.Base.Chat.Node.Data') | Data of this node.<br/> |
| [Type](Node_Type.md 'Guilded.NET.Base.Chat.Node.Type') | Type of the node.<br/> |
#### See Also
- [BlockQuote](BlockQuote.md 'Guilded.NET.Base.Chat.BlockQuote')
- [ChatEmbed](ChatEmbed.md 'Guilded.NET.Base.Chat.ChatEmbed')
- [ChatEmote](ChatEmote.md 'Guilded.NET.Base.Chat.ChatEmote')
- [ChatList](ChatList.md 'Guilded.NET.Base.Chat.ChatList')
- [CodeContainer](CodeContainer.md 'Guilded.NET.Base.Chat.CodeContainer')
- [Form](Form.md 'Guilded.NET.Base.Chat.Form')
- [Heading](Heading.md 'Guilded.NET.Base.Chat.Heading')
- [Image](Image.md 'Guilded.NET.Base.Chat.Image')
- [MarkdownText](MarkdownText.md 'Guilded.NET.Base.Chat.MarkdownText')
- [Paragraph](Paragraph.md 'Guilded.NET.Base.Chat.Paragraph')
- [ContainerNode&lt;T&gt;](ContainerNode_T_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
