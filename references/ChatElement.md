
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatElement Class
The base type for message element, such as [Node](Node 'Guilded.NET.Base.Chat.Node')s.  
```csharp
public abstract class ChatElement : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; ChatElement  

Derived  
&#8627; [Leaf](Leaf 'Guilded.NET.Base.Chat.Leaf')  
&#8627; [Mark](Mark 'Guilded.NET.Base.Chat.Mark')  
&#8627; [MessageRoot&lt;T&gt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;')  
&#8627; [Node](Node 'Guilded.NET.Base.Chat.Node')  
&#8627; [TextContainer](TextContainer 'Guilded.NET.Base.Chat.TextContainer')  

| Constructors | |
| :--- | :--- |
| [ChatElement(ElementType)](ChatElement_ChatElement(ElementType) 'Guilded.NET.Base.Chat.ChatElement.ChatElement(Guilded.NET.Base.Chat.ElementType)') | Base for message nodes, text containers and leaves.<br/> |

| Properties | |
| :--- | :--- |
| [Object](ChatElement_Object 'Guilded.NET.Base.Chat.ChatElement.Object') | The type of this chat element.<br/> |

#### See Also
- [Leaf](Leaf 'Guilded.NET.Base.Chat.Leaf')
- [Mark](Mark 'Guilded.NET.Base.Chat.Mark')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
