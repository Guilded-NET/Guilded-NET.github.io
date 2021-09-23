
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ContainerNode&lt;T&gt; Class
Node that holds other nodes and message objects.  
```csharp
public class ContainerNode<T> : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.ChatElement, T>
    where T : Guilded.NET.Base.Chat.ContainerNode<T>
```

#### Type parameters
<a name='Guilded_NET_Base_Chat_ContainerNode_T__T'></a>
`T`  
The child-type of container node
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[T](ContainerNode_T_#Guilded_NET_Base_Chat_ContainerNode_T__T 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.T')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; ContainerNode&lt;T&gt;  

Derived  
&#8627; [ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')  
&#8627; [ChatListItem](ChatListItem 'Guilded.NET.Base.Chat.ChatListItem')  
&#8627; [Heading](Heading 'Guilded.NET.Base.Chat.Heading')  
&#8627; [Hyperlink](Hyperlink 'Guilded.NET.Base.Chat.Hyperlink')  
&#8627; [ImageCaption](ImageCaption 'Guilded.NET.Base.Chat.ImageCaption')  
&#8627; [LineQuote](LineQuote 'Guilded.NET.Base.Chat.LineQuote')  
&#8627; [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')  

| Constructors | |
| :--- | :--- |
| [ContainerNode(NodeType, ElementType, ChatElement)](ContainerNode_T__ContainerNode(NodeType_ElementType_ChatElement) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ChatElement)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData, ChatElement)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData_ChatElement) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.ChatElement)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData, IList&lt;ChatElement&gt;)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData_IList_ChatElement_) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, IList&lt;ChatElement&gt;)](ContainerNode_T__ContainerNode(NodeType_ElementType_IList_ChatElement_) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType)](ContainerNode_T__ContainerNode(NodeType_ElementType) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType)') | Node that holds other nodes and message objects.<br/> |

| Methods | |
| :--- | :--- |
| [AddEmote(BaseEmote)](ContainerNode_T__AddEmote(BaseEmote) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddEmote(Guilded.NET.Base.BaseEmote)') | Adds an emote to the node list.<br/> |
| [AddEmote(EmoteInfo)](ContainerNode_T__AddEmote(EmoteInfo) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddEmote(Guilded.NET.Base.EmoteInfo)') | Adds an emote to the node list.<br/> |
| [AddMention(bool)](ContainerNode_T__AddMention(bool) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddMention(bool)') | Adds an @everyone or @here mention.<br/> |
| [AddMention(ChannelMentionData)](ContainerNode_T__AddMention(ChannelMentionData) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddMention(Guilded.NET.Base.Chat.ChannelMentionData)') | Adds a channel mention based on given data.<br/> |
| [AddMention(MemberMentionData)](ContainerNode_T__AddMention(MemberMentionData) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddMention(Guilded.NET.Base.Chat.MemberMentionData)') | Adds a member mention based on given data.<br/> |
| [AddMention(string, Guid)](ContainerNode_T__AddMention(string_Guid) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddMention(string, System.Guid)') | Adds a channel mention based on given name and identifier.<br/> |
| [AddText(Leaf[])](ContainerNode_T__AddText(Leaf__) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddText(Guilded.NET.Base.Chat.Leaf[])') | Adds a text container based on given leaves.<br/> |
| [AddText(string, Mark[])](ContainerNode_T__AddText(string_Mark__) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddText(string, Guilded.NET.Base.Chat.Mark[])') | Adds a text container based on given string.<br/> |
| [AddText(string, MarkType[])](ContainerNode_T__AddText(string_MarkType__) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddText(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a text container based on given string.<br/> |
| [AddText(string)](ContainerNode_T__AddText(string) 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.AddText(string)') | Adds a text container based on given string.<br/> |

#### See Also
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')
