#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
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
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[T](ContainerNode_T_.md#Guilded_NET_Base_Chat_ContainerNode_T__T 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.T')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ContainerNode&lt;T&gt;  

Derived  
&#8627; [ChatEmbed](ChatEmbed.md 'Guilded.NET.Base.Chat.ChatEmbed')  
&#8627; [ChatListItem](ChatListItem.md 'Guilded.NET.Base.Chat.ChatListItem')  
&#8627; [Heading](Heading.md 'Guilded.NET.Base.Chat.Heading')  
&#8627; [Hyperlink](Hyperlink.md 'Guilded.NET.Base.Chat.Hyperlink')  
&#8627; [ImageCaption](ImageCaption.md 'Guilded.NET.Base.Chat.ImageCaption')  
&#8627; [LineQuote](LineQuote.md 'Guilded.NET.Base.Chat.LineQuote')  
&#8627; [Paragraph](Paragraph.md 'Guilded.NET.Base.Chat.Paragraph')  

| Constructors | |
| :--- | :--- |
| [ContainerNode(NodeType, ElementType, ChatElement)](ContainerNode_T__ContainerNode(NodeType_ElementType_ChatElement).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ChatElement)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData, ChatElement)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData_ChatElement).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.ChatElement)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData, IList&lt;ChatElement&gt;)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData_IList_ChatElement_).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, ElementData)](ContainerNode_T__ContainerNode(NodeType_ElementType_ElementData).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, Guilded.NET.Base.Chat.ElementData)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType, IList&lt;ChatElement&gt;)](ContainerNode_T__ContainerNode(NodeType_ElementType_IList_ChatElement_).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | Node that holds other nodes and message objects.<br/> |
| [ContainerNode(NodeType, ElementType)](ContainerNode_T__ContainerNode(NodeType_ElementType).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.ContainerNode(Guilded.NET.Base.Chat.NodeType, Guilded.NET.Base.Chat.ElementType)') | Node that holds other nodes and message objects.<br/> |

| Methods | |
| :--- | :--- |
| [WithEmote(BaseEmote)](ContainerNode_T__WithEmote(BaseEmote).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithEmote(Guilded.NET.Base.BaseEmote)') | Adds an emote to the node list.<br/> |
| [WithEmote(EmoteInfo)](ContainerNode_T__WithEmote(EmoteInfo).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithEmote(Guilded.NET.Base.EmoteInfo)') | Adds an emote to the node list.<br/> |
| [WithMention(bool)](ContainerNode_T__WithMention(bool).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(bool)') | Adds an @everyone or @here mention.<br/> |
| [WithMention(ChannelMentionData)](ContainerNode_T__WithMention(ChannelMentionData).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Chat.ChannelMentionData)') | Adds a channel mention based on given data.<br/> |
| [WithMention(MemberMentionData)](ContainerNode_T__WithMention(MemberMentionData).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Chat.MemberMentionData)') | Adds a member mention based on given data.<br/> |
| [WithMention(Member, Nullable&lt;Color&gt;)](ContainerNode_T__WithMention(Member_Nullable_Color_).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Teams.Member, System.Nullable&lt;System.Drawing.Color&gt;)') | Adds a member mention based on given member and their colour.<br/> |
| [WithMention(TeamChannel)](ContainerNode_T__WithMention(TeamChannel).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Teams.TeamChannel)') | Adds a channel mention for the given channel.<br/> |
| [WithMention(TeamRole)](ContainerNode_T__WithMention(TeamRole).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Teams.TeamRole)') | Adds a role mention based on given role.<br/> |
| [WithMention(BaseUser)](ContainerNode_T__WithMention(BaseUser).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(Guilded.NET.Base.Users.BaseUser)') | Adds a user mention based on given user.<br/> |
| [WithMention(string, Guid)](ContainerNode_T__WithMention(string_Guid).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithMention(string, System.Guid)') | Adds a channel mention based on given name and identifier.<br/> |
| [WithText(Leaf[])](ContainerNode_T__WithText(Leaf__).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithText(Guilded.NET.Base.Chat.Leaf[])') | Adds a text container based on given leaves.<br/> |
| [WithText(string, Mark[])](ContainerNode_T__WithText(string_Mark__).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithText(string, Guilded.NET.Base.Chat.Mark[])') | Adds a text container based on given string.<br/> |
| [WithText(string, MarkType[])](ContainerNode_T__WithText(string_MarkType__).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithText(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a text container based on given string.<br/> |
| [WithText(string)](ContainerNode_T__WithText(string).md 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;.WithText(string)') | Adds a text container based on given string.<br/> |
#### See Also
- [Node](Node.md 'Guilded.NET.Base.Chat.Node')
- [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement')
