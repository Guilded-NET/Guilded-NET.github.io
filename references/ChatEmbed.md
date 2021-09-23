
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatEmbed Class
Container that holds embeds.  
```csharp
public class ChatEmbed : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.ChatEmbed>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[ChatEmbed](ChatEmbed 'Guilded.NET.Base.Chat.ChatEmbed')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#x27A1; ChatEmbed  
### Example
Chat embed with 2 embeds:

```csharp
  
ChatEmbed embed = new ChatEmbed  
(  
    new Embed("Title", "Description", "Footer"),  
    new Embed()  
        .SetTitle("Title")  
        .SetColor(0xFF0000)  
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
| [AddEmbed(Embed)](ChatEmbed_AddEmbed(Embed) 'Guilded.NET.Base.Chat.ChatEmbed.AddEmbed(Guilded.NET.Base.Embeds.Embed)') | Adds a given embed to the embed list.<br/> |
| [ToString()](ChatEmbed_ToString() 'Guilded.NET.Base.Chat.ChatEmbed.ToString()') | Returns the count of all embeds in this node.<br/> |

#### See Also
- [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
- [ContentEmbed](ContentEmbed 'Guilded.NET.Base.Chat.ContentEmbed')
