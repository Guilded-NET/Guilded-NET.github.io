
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatEmbed Class
Container that holds embeds.  
```csharp
public class ChatEmbed : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.ChatEmbed>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#129106; ChatEmbed  
### Example
Chat embed with 2 embeds:

```csharp
  
            ChatEmbed embed = new ChatEmbed  
            (  
                new Embed("Title", "Description", "Footer"),  
                new Embed()  
                    .WithTitle("Title")  
                    .WithColor(0xFF0000)  
            );  
            ```
### Remarks
Node that holds custom/rich embeds.  

| Constructors | |
| :--- | :--- |
| [ChatEmbed(Embed[])](ChatEmbed_ChatEmbed(Embed__) 'Guilded.NET.Base.Chat.ChatEmbed.ChatEmbed(Guilded.NET.Base.Embeds.Embed[])') | An element that contains embeds.<br/> |
| [ChatEmbed(IList&lt;Embed&gt;)](ChatEmbed_ChatEmbed(IList_Embed_) 'Guilded.NET.Base.Chat.ChatEmbed.ChatEmbed(System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;)') | An element that contains embeds.<br/> |

| Properties | |
| :--- | :--- |
| [Embeds](ChatEmbed_Embeds 'Guilded.NET.Base.Chat.ChatEmbed.Embeds') | The list of embeds in this embed node.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ChatEmbed_ToString() 'Guilded.NET.Base.Chat.ChatEmbed.ToString()') | Returns the count of all embeds in this node.<br/> |
| [WithEmbed(Embed)](ChatEmbed_WithEmbed(Embed) 'Guilded.NET.Base.Chat.ChatEmbed.WithEmbed(Guilded.NET.Base.Embeds.Embed)') | Adds a given embed to the embed list.<br/> |

#### See Also
- [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
- [ContentEmbed](ContentEmbed 'Guilded.NET.Base.Chat.ContentEmbed')
