#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatEmote Class
A small inline image that represents an emotion or a meme.  
```csharp
public class ChatEmote : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.ChatEmote>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatEmote](ChatEmote.md 'Guilded.NET.Base.Chat.ChatEmote')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ChatEmote  
### Remarks
Any global emote/emoji, even the ones you don't have in emote list.  

| Constructors | |
| :--- | :--- |
| [ChatEmote(BaseEmote)](ChatEmote_ChatEmote(BaseEmote).md 'Guilded.NET.Base.Chat.ChatEmote.ChatEmote(Guilded.NET.Base.BaseEmote)') | A small inline image that represents an emotion or a meme.<br/> |
| [ChatEmote(EmoteInfo)](ChatEmote_ChatEmote(EmoteInfo).md 'Guilded.NET.Base.Chat.ChatEmote.ChatEmote(Guilded.NET.Base.EmoteInfo)') | A small inline image that represents an emotion or a meme.<br/> |

| Properties | |
| :--- | :--- |
| [Emote](ChatEmote_Emote.md 'Guilded.NET.Base.Chat.ChatEmote.Emote') | The information about the emote used.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ChatEmote_ToString().md 'Guilded.NET.Base.Chat.ChatEmote.ToString()') | Converts emote to its string equivalent.<br/> |
#### See Also
- [Image](Image.md 'Guilded.NET.Base.Chat.Image')
