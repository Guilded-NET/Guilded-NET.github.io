
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Node Class
A node in a rich text markup tree.  
```csharp
public abstract class Node : Guilded.NET.Base.Chat.ChatElement
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; Node  

Derived  
&#8627; [ContainerNode&lt;T,R&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')  

| Constructors | |
| :--- | :--- |
| [Node(NodeType, ElementType, ElementData)](Node_Node(NodeType_ElementType_ElementData) 'Guilded.NET.Base.Chat.Node.Node(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData)') | Represents a node part of message content tree.<br/> |
| [Node(NodeType, ElementType)](Node_Node(NodeType_ElementType) 'Guilded.NET.Base.Chat.Node.Node(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType)') | Represents a node part of message content tree.<br/> |

| Properties | |
| :--- | :--- |
| [Data](Node_Data 'Guilded.NET.Base.Chat.Node.Data') | Data of this node.<br/> |
| [Type](Node_Type 'Guilded.NET.Base.Chat.Node.Type') | Type of the node.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
- [ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')
- [ChatEmote](ChatEmote 'Guilded.NET.Base.Chat.ChatEmote')
- [ChatList](ChatList 'Guilded.NET.Base.Chat.ChatList')
- [CodeContainer](CodeContainer 'Guilded.NET.Base.Chat.CodeContainer')
- [Form](Form 'Guilded.NET.Base.Chat.Form')
- [Heading](Heading 'Guilded.NET.Base.Chat.Heading')
- [Image](Image 'Guilded.NET.Base.Chat.Image')
- [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
