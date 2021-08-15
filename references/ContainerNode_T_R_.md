
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ContainerNode&lt;T,R&gt; Class
Node that holds other nodes and message objects.  
```csharp
public abstract class ContainerNode<T,R> : Guilded.NET.Base.Chat.Node
    where T : Guilded.NET.Base.Chat.ChatElement
    where R : Guilded.NET.Base.Chat.ContainerNode<T, R>
```

#### Type parameters
<a name='Guilded_NET_Base_Chat_ContainerNode_T_R__T'></a>
`T`  
The type of children of [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') property
  
<a name='Guilded_NET_Base_Chat_ContainerNode_T_R__R'></a>
`R`  
The child-type of container node
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; ContainerNode&lt;T,R&gt;  

Derived  
&#8627; [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')  
&#8627; [ChannelMention](ChannelMention 'Guilded.NET.Base.Chat.ChannelMention')  
&#8627; [ChatEmote](ChatEmote 'Guilded.NET.Base.Chat.ChatEmote')  
&#8627; [ChatList](ChatList 'Guilded.NET.Base.Chat.ChatList')  
&#8627; [CodeContainer](CodeContainer 'Guilded.NET.Base.Chat.CodeContainer')  
&#8627; [CodeLine](CodeLine 'Guilded.NET.Base.Chat.CodeLine')  
&#8627; [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')  
&#8627; [ContentEmbed](ContentEmbed 'Guilded.NET.Base.Chat.ContentEmbed')  
&#8627; [Divider](Divider 'Guilded.NET.Base.Chat.Divider')  
&#8627; [Form](Form 'Guilded.NET.Base.Chat.Form')  
&#8627; [Image](Image 'Guilded.NET.Base.Chat.Image')  
&#8627; [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')  
&#8627; [MemberMention](MemberMention 'Guilded.NET.Base.Chat.MemberMention')  
&#8627; [ReplyHeader](ReplyHeader 'Guilded.NET.Base.Chat.ReplyHeader')  

| Constructors | |
| :--- | :--- |
| [ContainerNode(NodeType, ElementType, ElementData, IList&lt;T&gt;)](ContainerNode_T_R__ContainerNode(NodeType_ElementType_ElementData_IList_T_) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, System.Collections.Generic.IList&lt;T&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData, T)](ContainerNode_T_R__ContainerNode(NodeType_ElementType_ElementData_T) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, T)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData)](ContainerNode_T_R__ContainerNode(NodeType_ElementType_ElementData) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, IList&lt;T&gt;)](ContainerNode_T_R__ContainerNode(NodeType_ElementType_IList_T_) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, System.Collections.Generic.IList&lt;T&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, T)](ContainerNode_T_R__ContainerNode(NodeType_ElementType_T) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, T)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType)](ContainerNode_T_R__ContainerNode(NodeType_ElementType) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType)') | Node that holds other nodes and message objects.<br/> |

| Properties | |
| :--- | :--- |
| [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') | The list of message objects this node holds.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ContainerNode_T_R__ToString() 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.ToString()') | Gets string equivalent of node's children and joins them.<br/> |
| [With(IEnumerable&lt;T&gt;)](ContainerNode_T_R__With(IEnumerable_T_) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.With(System.Collections.Generic.IEnumerable&lt;T&gt;)') | Adds a node to [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list.<br/> |
| [With(T)](ContainerNode_T_R__With(T) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.With(T)') | Adds a node to [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list.<br/> |
| [Without(int, int)](ContainerNode_T_R__Without(int_int) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(int, int)') | Removes a list of nodes from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list based on index.<br/> |
| [Without(int)](ContainerNode_T_R__Without(int) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(int)') | Removes a node from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list based on index.<br/> |
| [Without(Index, Index)](ContainerNode_T_R__Without(Index_Index) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(System.Index, System.Index)') | Removes a list of nodes from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list based on indices.<br/> |
| [Without(Index)](ContainerNode_T_R__Without(Index) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(System.Index)') | Removes a node from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list based on index.<br/> |
| [Without(Range)](ContainerNode_T_R__Without(Range) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(System.Range)') | Removes a list of nodes from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list based on range.<br/> |
| [Without(T)](ContainerNode_T_R__Without(T) 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Without(T)') | Removes a node from [Nodes](ContainerNode_T_R__Nodes 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;.Nodes') list.<br/> |

#### See Also
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')
