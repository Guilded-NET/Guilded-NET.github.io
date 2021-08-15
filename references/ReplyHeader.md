
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ReplyHeader Class
Header that tells to what the comment is replying.  
```csharp
public class ReplyHeader : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.ReplyHeader>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ReplyHeader](ReplyHeader 'Guilded.NET.Base.Chat.ReplyHeader')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ReplyHeader  

| Constructors | |
| :--- | :--- |
| [ReplyHeader()](ReplyHeader_ReplyHeader() 'Guilded.NET.Base.Chat.ReplyHeader.ReplyHeader()') | Header that tells to what the comment is replying.<br/> |
| [ReplyHeader(uint, GId, ReplyHeaderType)](ReplyHeader_ReplyHeader(uint_GId_ReplyHeaderType) 'Guilded.NET.Base.Chat.ReplyHeader.ReplyHeader(uint, Guilded.NET.Base.GId, Guilded.NET.Base.Chat.ReplyHeaderType)') | Header that tells to what the comment is replying.<br/> |

| Properties | |
| :--- | :--- |
| [PostId](ReplyHeader_PostId 'Guilded.NET.Base.Chat.ReplyHeader.PostId') | ID of the post it is replying to.<br/> |
| [ReplyingTo](ReplyHeader_ReplyingTo 'Guilded.NET.Base.Chat.ReplyHeader.ReplyingTo') | ID of the user it is replying to.<br/> |
| [ReplyType](ReplyHeader_ReplyType 'Guilded.NET.Base.Chat.ReplyHeader.ReplyType') | Type of the reply header.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ReplyHeader_ToString() 'Guilded.NET.Base.Chat.ReplyHeader.ToString()') | Converts reply to its string equivalent.<br/> |
